import { ArrowDown, ArrowUpRight, FileDown, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="about" className="identity-hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> THE ENGINEER BEHIND THE ENDPOINT</p>
          <p className="hero-intro">Hi, I'm {personalInfo.name}.</p>
          <h1>I build the logic.<br /><span>You see the</span><br /><em>possibilities.</em></h1>
          <p className="hero-description">Backend & Laravel developer turning complex workflows into reliable APIs, thoughtful admin tools, and systems built to scale.</p>
          <div className="hero-actions">
            <a className="studio-button primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
            <button className="studio-button" onClick={onOpenResume}><FileDown size={17} /> View resume</button>
          </div>
          <div className="hero-location"><MapPin size={14} /> {personalInfo.location}<span>/</span> PHP · Laravel · Node.js</div>
        </div>
        <div className="identity-art" aria-label="An illustrated backend developer profile">
          <div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="art-coordinate">28.61° N / 77.20° E</span>
          <div className="monogram">K<span>C</span><i>_</i></div>
          <div className="floating-code code-top"><span>01</span> &lt;built with purpose /&gt;</div>
          <div className="floating-code code-bottom"><span className="status-dot" /> complexity → clarity</div>
          <div className="art-caption"><span>BACKEND ENGINEERING</span><ArrowUpRight size={24} /></div>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#systems" className="scroll-link"><ArrowDown size={16} /> Go beneath the surface</a>
        <div className="hero-metrics">{personalInfo.stats.slice(0, 3).map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
      </div>
    </section>
  );
}
