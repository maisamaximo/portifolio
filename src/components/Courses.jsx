import React from 'react';
import { GraduationCap, ExternalLink, BookOpen } from 'lucide-react';
import { courses } from '../data/mock';

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-purple-400 text-sm font-mono mb-2">{'// 05. Education'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Formal education and specialized courses that built my foundation in software development.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-[#0f0f15] border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs text-purple-300 bg-purple-500/10 rounded-full">
                      {course.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {course.platform}
                  </p>
                </div>

                {/* Link */}
                {course.url && course.url !== '#' && (
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
                    aria-label={`Visit ${course.platform}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;