import React from 'react';
import { Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';
import { experiences } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-purple-400 text-sm font-mono mb-2">{'// 03. Experience'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            6+ years of building impactful digital products across fintech, enterprise, and startup environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -translate-x-1/2 mt-6 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-30" />
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="group bg-[#0f0f15] border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
                    {/* Period */}
                    <div className={`flex items-center gap-2 text-purple-400 text-sm mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>

                    {/* Company & Location */}
                    <div className={`flex items-center gap-4 text-gray-400 text-sm mb-4 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full">
            <span className="text-gray-400">Total Experience:</span>
            <span className="text-white font-semibold">6+ Years</span>
            <ChevronRight className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400">8 Companies</span>
            <ChevronRight className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400">3 Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;