import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationList } from '../data/portfolioData';


export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            First-division graduate in Computer Applications and Software Engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800">
                    {item.grade}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-indigo-300/90 mt-1">
                  {item.institution}
                </p>

                {item.description && (
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed border-t border-slate-800/60 pt-3">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
