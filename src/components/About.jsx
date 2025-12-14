import React, { useState } from 'react';
import { MapPin, Briefcase, Heart, Plane, Dumbbell, Lightbulb, TreePine, Camera } from 'lucide-react';
import { aboutMe, personalInfo, skills } from '../data/mock';

const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePhotoHover = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % aboutMe.photos.length);
  };

  const interests = [
    { icon: Plane, label: 'Travel', color: 'text-cyan-400' },
    { icon: Dumbbell, label: 'Fitness', color: 'text-pink-400' },
    { icon: Lightbulb, label: 'Curious Mind', color: 'text-yellow-400' },
    { icon: TreePine, label: 'Nature', color: 'text-green-400' },
    { icon: Camera, label: 'Photography', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-purple-400 text-sm font-mono mb-2">{'// 01. About Me'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Section */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={handlePhotoHover}
              onClick={handlePhotoHover}
            >
              {/* Main Photo */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 mx-auto">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                  <img
                    src={aboutMe.photos[currentPhotoIndex]}
                    alt="Maisa Maximo"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {aboutMe.photos.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentPhotoIndex
                          ? 'w-6 bg-gradient-to-r from-purple-400 to-pink-400'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Hover Hint */}
              <p className="text-center text-gray-500 text-sm mt-4">
                Hover to see more ✨
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-purple-500/20 rounded-lg rotate-12 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-pink-500/20 rounded-full hidden lg:block" />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">{personalInfo.location}</span>
            </div>

            {/* Intro */}
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              {aboutMe.intro}
            </p>

            {/* Paragraphs */}
            <div className="space-y-4">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interests */}
            <div className="pt-4">
              <p className="text-gray-500 text-sm mb-3">Beyond the code:</p>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-gray-800 rounded-full hover:border-purple-500/30 transition-all group"
                  >
                    <Icon className={`w-4 h-4 ${color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm text-gray-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-2xl font-bold text-white">6+</p>
                  <p className="text-xs text-gray-400">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 rounded-xl">
                <Heart className="w-5 h-5 text-pink-400" />
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-gray-400">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 pt-16 border-t border-gray-800/50">
          <h3 className="text-xl font-semibold text-white mb-8">Technical Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs text-gray-400 bg-white/5 border border-gray-800 rounded hover:border-purple-500/30 hover:text-purple-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;