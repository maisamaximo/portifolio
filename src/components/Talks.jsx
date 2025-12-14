import React from 'react';
import { Mic, Calendar, Users, MessageCircle } from 'lucide-react';
import { talks } from '../data/mock';

const Talks = () => {
  return (
    <section id="talks" className="py-24 bg-[#08080c] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-purple-400 text-sm font-mono mb-2">{'// 06. Talks & Speaking'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sharing <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Knowledge</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I believe in giving back to the community. Here are some talks I've given at conferences and meetups.
          </p>
        </div>

        {/* Talks Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {talks.map((talk, index) => (
            <div
              key={talk.id}
              className="group relative bg-[#0f0f15] border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Mic className="w-8 h-8 text-purple-400" />
                </div>
              </div>

              {/* Event & Year */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1 text-purple-400 text-xs">
                  <Users className="w-3 h-3" />
                  <span>{talk.event}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{talk.year}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                "{talk.title}"
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {talk.description}
              </p>

              {/* Decorative Quote */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageCircle className="w-12 h-12 text-purple-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Volunteering Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
            <div className="text-left">
              <p className="text-white font-medium mb-1">Community Organizer</p>
              <p className="text-gray-400 text-sm">
                GDG SJC • Women Techmakers SJC • Digital Innovation One Instructor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;