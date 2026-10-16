import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, RotateCcw, ShieldCheck, Server, Database, Send } from 'lucide-react';

const stages = [
  { title: 'Validate & protect', icon: ShieldCheck, label: 'API gateway', detail: 'Validate the payload, authenticate the caller, and apply rate limits before any business logic runs.', log: 'Request validated · authentication passed' },
  { title: 'Make the decision', icon: Server, label: 'Laravel service', detail: 'Keep controllers focused. A service layer owns the booking rules and coordinates the transaction.', log: 'Booking service called · business rules passed' },
  { title: 'Keep data consistent', icon: Database, label: 'Database', detail: 'Persist the booking in a transaction. Indexed queries and clear relationships keep the data layer predictable.', log: 'Transaction committed · booking persisted' },
  { title: 'Do the slow work later', icon: Send, label: 'Queue worker', detail: 'Dispatch a background job for the confirmation email, then return a clear response to the client.', log: 'Confirmation queued · 201 Created' },
];

export default function SystemExplorer() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  function run() {
    clearTimeout(timer.current);
    setRunning(true);
    setStep(-1);
    let next = 0;
    function tick() {
      setStep(next);
      setSelected(next);
      next += 1;
      if (next < stages.length) timer.current = setTimeout(tick, 850);
      else setRunning(false);
    }
    timer.current = setTimeout(tick, 350);
  }
  const current = stages[selected];
  return (
    <section id="systems" className="system-section">
      <div className="system-heading"><div><p className="eyebrow">01 / UNDER THE HOOD</p><h2>Good backends are invisible.<br /><span>Let's make one visible.</span></h2></div><p>A small, interactive look at how I think about a request. Follow a booking from the first API call to the final response.</p></div>
      <div className="system-workbench">
        <div className="workbench-bar"><span><span className="status-dot" /> REQUEST EXPLORER</span><span>ILLUSTRATIVE DEMO · RUNS LOCALLY</span></div>
        <div className="request-row"><code><b>POST</b> /api/bookings</code><button className="studio-button primary" onClick={run} disabled={running}>{step === 3 ? <RotateCcw size={15} /> : <Play size={15} />}{running ? 'Tracing request…' : step === 3 ? 'Run again' : 'Send request'}</button></div>
        <div className="pipeline">{stages.map((stage, index) => <div className="pipeline-item" key={stage.label}><button onClick={() => setSelected(index)} aria-pressed={selected === index} className={`pipeline-node ${selected === index ? 'selected' : ''} ${step >= index ? 'completed' : ''}`}><stage.icon size={23} /><span>{stage.label}</span><small>{step >= index ? '✓ processed' : `0${index + 1}`}</small></button>{index < 3 && <ArrowRight className="pipeline-arrow" size={18} />}</div>)}</div>
        <div className="system-detail"><div><p className="eyebrow">0{selected + 1} / DESIGN DECISION</p><h3>{current.title}</h3><p>{current.detail}</p></div><div className="trace-output" role="status" aria-live="polite"><span>$ request.trace</span>{step < 0 ? <p>Ready. Send a request to follow the flow.</p> : stages.slice(0, step + 1).map((stage, i) => <p key={stage.label}><b>0{i + 1}</b> {stage.log}</p>)}</div></div>
      </div>
      <a className="system-next" href="#code">Explore the code behind the approach <ArrowRight size={16} /></a>
    </section>
  );
}
