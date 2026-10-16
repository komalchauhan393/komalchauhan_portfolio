import React, { useEffect, useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Check, 
  ArrowUpRight, 
  Globe,
  X
} from 'lucide-react';
import { projects } from '../data/portfolioData';


export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (!selectedProject) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = document.getElementById('project-dialog');
    const closeButton = dialog?.querySelector('button');
    closeButton?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
      if (event.key === 'Tab') {
        const focusable = dialog?.querySelectorAll('button, a[href]');
        const first = focusable?.[0];
        const last = focusable?.[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
      previousFocus?.focus();
    };
  }, [selectedProject]);

  const categories = ['All', 'Laravel & Filament', 'Node.js & Next.js', 'APIs & Microservices', 'Real-Time & Cloud'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Production Engineering & Projects
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Scalable architectures deployed across international clients in travel, healthcare, mobility, and commerce.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between p-6 group hover:-translate-y-1 shadow-lg shadow-black/40 relative overflow-hidden"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent group-hover:via-indigo-500 transition-colors" />

              <div>
                {/* Header Tag & Live Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-indigo-300 border border-slate-700/60">
                    {project.category}
                  </span>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-850/60 border border-slate-800 px-2 py-0.5 rounded">
                      Enterprise / Closed
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-indigo-300/80 font-mono mt-1">
                  {project.role} • {project.client}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300/90 mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="mt-4 space-y-1.5 border-t border-slate-800/60 pt-3 text-xs text-slate-300">
                  {project.features.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tech tags + Detail trigger */}
              <div className="pt-5 mt-4 border-t border-slate-800/70">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {project.stats}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Architecture Viewer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div id="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-title" className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                {selectedProject.category}
              </span>
              <h3 id="project-title" className="text-2xl font-bold text-slate-100 mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-indigo-400 mt-1">
                {selectedProject.role} • {selectedProject.client}
              </p>
            </div>

            {/* Overview */}
            <div className="mt-5 space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>{selectedProject.description}</p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Backend Architecture & Deliverables:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Integrated Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-indigo-950/60 border border-indigo-800/80 text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {selectedProject.liveUrl && (
                <div className="pt-2">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit Live Production Website ({selectedProject.liveUrl})</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
