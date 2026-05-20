'use client';

import projects from '../data/projects';

export default function Projects() {
  return (
    <div id="projects" className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-6 px-6">
      {projects.map((p, i) => (
        <div key={i} className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-gray-400">{p.desc}</p>
          <a href={p.link} className="text-cyan-400 mt-2 inline-block">View Code</a>
        </div>
      ))}
    </div>
  );
}
