import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  CreditCard, 
  Cpu, 
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';


const iconMap = {
  Code: Code2,
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  CreditCard: CreditCard,
  Cpu: Cpu
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Production-Tested Backend Stack
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            3+ years engineering fault-tolerant microservices, high-traffic relational/NoSQL schemas, and secure API gateways.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Layers;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/70 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5">
                {React.createElement(iconMap[skillCategories[activeTab].icon] || Layers, {
                  className: "w-6 h-6 text-indigo-400"
                })}
                {skillCategories[activeTab].category}
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                {skillCategories[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-mono text-indigo-300 bg-indigo-950/70 border border-indigo-800/60 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
              {skillCategories[activeTab].skills.length} Core Technologies
            </span>
          </div>

          {/* Grid of Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                    skill.level === 'Expert'
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                      : skill.level === 'Advanced'
                      ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/60'
                      : 'bg-purple-950/80 text-purple-400 border border-purple-800/60'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Highlights Band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-200">Zero-Trust Authentication</div>
              <div className="text-xs text-slate-400 mt-0.5">JWT, Laravel Sanctum, role-based access control, cryptographic tokens.</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-200">High-Concurrency Throughput</div>
              <div className="text-xs text-slate-400 mt-0.5">Query profiling, N+1 elimination, Redis caching & asynchronous queue workers.</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
            <Cloud className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-slate-200">Cloud & Server Administration</div>
              <div className="text-xs text-slate-400 mt-0.5">AWS EC2, S3, CloudWatch monitoring, Plesk automation, Docker containers & PM2.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
