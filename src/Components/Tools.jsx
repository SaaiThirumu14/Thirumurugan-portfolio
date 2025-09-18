import React, { useState } from "react";
import reacticonlogo from "../assets/react.svg";
import nodeiconlogo from "../assets/nodejs.webp";
import expressiconlogo from "../assets/express-js.webp";
import mongodbiconlogo from "../assets/mongo.webp";
import javascripticonlogo from "../assets/js.webp";
import htmliconlogo from "../assets/HTML5.webp";
import cssiconlogo from "../assets/css.webp";
import flutteric from "../assets/flutter-logo-sharing.webp";
import tailwindlogo from "../assets/tail.webp";
import wordpress from "../assets/wordpress.webp";
import framer from "../assets/framer_logo.webp";

const Tools = () => {
  const [isPaused, setIsPaused] = useState(false);

  const toolsData = [
    { image: reacticonlogo, title: "React.js", percentage: 90, color: "from-blue-500 to-cyan-400" },
    { image: nodeiconlogo, title: "Node.js", percentage: 85, color: "from-green-500 to-emerald-400" },
    { image: expressiconlogo, title: "Express.js", percentage: 80, color: "from-gray-500 to-slate-400" },
    { image: mongodbiconlogo, title: "MongoDB", percentage: 85, color: "from-green-600 to-green-400" },
    { image: javascripticonlogo, title: "JavaScript", percentage: 95, color: "from-yellow-500 to-orange-400" },
    { image: htmliconlogo, title: "HTML5", percentage: 95, color: "from-orange-500 to-red-400" },
    { image: cssiconlogo, title: "CSS3", percentage: 90, color: "from-blue-600 to-blue-400" },
    { image: flutteric, title: "Flutter", percentage: 70, color: "from-blue-400 to-indigo-400" },
    { image: tailwindlogo, title: "TailWind CSS", percentage: 60, color: "from-teal-500 to-cyan-400" },
    { image: wordpress, title: "WordPress", percentage: 75, color: "from-blue-700 to-blue-500" },
    { image: framer, title: "Framer", percentage: 70, color: "from-purple-500 to-pink-400" },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-300 text-transparent bg-clip-text mb-4">
          🚀 My Tech Stack
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Scrolling Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        
        <div 
          className={`flex animate-scroll ${isPaused ? 'pause' : ''}`}
          style={{ width: 'fit-content' }}
        >
          {/* Double the array for seamless loop */}
          {[...toolsData, ...toolsData].map((tool, index) => (
            <div
              key={`${tool.title}-${index}`}
              className="flex-shrink-0 mx-4 group"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                {/* Tech Icon */}
                <div className="absolute inset-3">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-semibold text-sm text-center mb-3">
                    {tool.title}
                  </h3>
                  
                  {/* Circular Progress */}
                  <div className="relative w-16 h-16">
                    {/* Background Circle */}
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-slate-700"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className={`bg-gradient-to-r ${tool.color}`}
                        stroke="url(#gradient)"
                        strokeDasharray={`${tool.percentage * 1.75} 175`}
                        style={{
                          transition: 'stroke-dasharray 1s ease-in-out',
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" className="text-blue-500" stopColor="currentColor" />
                          <stop offset="100%" className="text-purple-500" stopColor="currentColor" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Percentage Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {tool.percentage}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${tool.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll.pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Tools;