import React from 'react';
import { FileText, ExternalLink, BookOpen, PenTool } from 'lucide-react';
import { articles } from '../data/mock';

const Articles = () => {
  const platformIcons = {
    'Medium': BookOpen,
    'Dev.to': PenTool,
    'LinkedIn': FileText,
  };

  const platformColors = {
    'Medium': 'from-green-500/20 to-green-600/20',
    'Dev.to': 'from-blue-500/20 to-purple-500/20',
    'LinkedIn': 'from-blue-500/20 to-blue-600/20',
  };

  return (
    <section id="articles" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-purple-400 text-sm font-mono mb-2">{'// 07. Articles'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Written <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Thoughts</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            I write about frontend development, clean code practices, and web accessibility.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-4 max-w-4xl">
          {articles.map((article, index) => {
            const IconComponent = platformIcons[article.platform] || FileText;
            const gradientClass = platformColors[article.platform] || 'from-purple-500/20 to-pink-500/20';

            return (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 bg-[#0f0f15] border border-gray-800/50 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5"
              >
                {/* Platform Icon */}
                <div className={`p-3 bg-gradient-to-br ${gradientClass} rounded-xl border border-gray-700/50 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 text-xs text-purple-300 bg-purple-500/10 rounded-full">
                      {article.platform}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors truncate">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 p-2 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all">
                  <ExternalLink size={18} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Note about mock data */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs italic">
            * Articles displayed are placeholders - real links coming soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Articles;