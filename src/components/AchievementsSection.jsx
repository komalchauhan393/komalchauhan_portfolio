import React from 'react';
import { Award, Zap, Gauge, GraduationCap, Globe2, Sparkles, CheckCircle } from 'lucide-react';
import { keyHighlights } from '../data/portfolioData';

const iconMap = {
  Trophy: Award,
  Zap: Zap,
  Gauge: Gauge,
  GraduationCap: GraduationCap
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Awards, Sprints & Key Milestones
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Recognized for engineering velocity, architectural precision, and solving critical client bottlenecks under tight deadlines.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyHighlights.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages & Working Style Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800 text-indigo-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">Languages & Communication</div>
              <div className="text-xs text-slate-400">English (Professional Working Proficiency) • Hindi (Native Speaker)</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/70 border border-emerald-800 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              Agile / Scrum Ready
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-indigo-950/70 border border-indigo-800 text-indigo-400">
              Jira / Postman / Slack
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
