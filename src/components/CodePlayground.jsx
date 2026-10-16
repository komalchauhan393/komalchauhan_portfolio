import React, { useState } from 'react';
import { Terminal, Copy, Check, Code2 } from 'lucide-react';
import { codeSnippets } from '../data/portfolioData';


export default function CodePlayground() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippet = codeSnippets[activeSnippet];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>CODE QUALITY & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Interactive Backend Code Showcase
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Clean PSR-12 compliant PHP/Laravel standards, secure authentication flows, and scalable event-driven services.
          </p>
        </div>

        {/* Code Editor Window */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Bar: Tabs & Copy Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 gap-3">
            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {codeSnippets.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSnippet(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                    activeSnippet === idx
                      ? 'bg-slate-800 text-indigo-400 border border-slate-700 shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700/80 rounded-lg transition-colors shrink-0 self-end sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          {/* Editor Body */}
          <div className="p-4 sm:p-6 overflow-x-auto bg-[#0a0f1d]">
            <pre className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
              <code>{snippet.code}</code>
            </pre>
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Language: {snippet.lang.toUpperCase()}</span>
            </span>
            <span className="text-slate-500">Production-Ready Standards</span>
          </div>

        </div>

      </div>
    </section>
  );
}
