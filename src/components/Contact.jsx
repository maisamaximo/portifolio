import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Download, MessageCircle, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${personalInfo.whatsapp}`;

  return (
    <section id="contact" className="py-24 bg-[#08080c] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-purple-400 text-sm font-mono mb-2">{'// 08. Contact'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Contact Options */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {/* WhatsApp - Primary */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-green-500/10 border border-green-500/20 rounded-2xl hover:bg-green-500/20 hover:border-green-500/40 transition-all hover:scale-105"
            >
              <div className="p-4 bg-green-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
              <p className="text-gray-400 text-sm text-center">Quick response</p>
              <ArrowRight className="w-4 h-4 text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex flex-col items-center p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl hover:bg-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
            >
              <div className="p-4 bg-purple-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-gray-400 text-sm text-center">Detailed inquiries</p>
              <ArrowRight className="w-4 h-4 text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex flex-col items-center p-6 bg-pink-500/10 border border-pink-500/20 rounded-2xl hover:bg-pink-500/20 hover:border-pink-500/40 transition-all hover:scale-105"
            >
              <div className="p-4 bg-pink-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Phone</h3>
              <p className="text-gray-400 text-sm text-center">Direct call</p>
              <ArrowRight className="w-4 h-4 text-pink-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#0f0f15] border border-gray-800/50 rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email Detail */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white text-sm">{personalInfo.email}</p>
                </div>
              </div>

              {/* Phone Detail */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-500/10 rounded-xl">
                  <Phone className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white text-sm">{personalInfo.phone}</p>
                </div>
              </div>

              {/* Location Detail */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white text-sm">{personalInfo.location}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Status</p>
                  <p className="text-green-400 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Available for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & CV Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0f0f15] border border-gray-800/50 rounded-2xl p-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Follow me:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-gray-800 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/30 transition-all group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-gray-800 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/30 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-gray-800 rounded-xl hover:bg-pink-500/10 hover:border-pink-500/30 transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400" />
                </a>
              </div>
            </div>

            {/* Download CV */}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
