import React from "react";

const About = () => {
  return (
    <section 
      id="about" 
      className="relative max-w-6xl mx-auto py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-300 text-transparent bg-clip-text mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Main Description */}
        <div className="space-y-6">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Full Stack Developer
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I am a passionate Full Stack Developer specializing in the{" "}
              <span className="text-blue-400 font-medium">MERN stack</span>{" "}
              (MongoDB, Express.js, React.js, Node.js). I enjoy building modern, 
              scalable web applications and crafting responsive UI components that 
              enhance user experience.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Mobile Development
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Along with web development, I also have hands-on experience in{" "}
              <span className="text-purple-400 font-medium">Flutter</span> and{" "}
              <span className="text-green-400 font-medium">Native Android development</span>, 
              creating cross-platform and native mobile applications with clean UI 
              and optimized performance.
            </p>
          </div>
        </div>

        {/* Right Column - Skills & Interests */}
        <div className="space-y-6">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Innovation & Technology
            </h3>
            <p className="text-slate-300 leading-relaxed">
              My interests include working with{" "}
              <span className="text-green-400 font-medium">IoT projects</span>,{" "}
              <span className="text-yellow-400 font-medium">AI integrations</span>, and 
              automating real-life processes with smart solutions. I believe in writing 
              clean, maintainable code and continuously improving my skills.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "React.js", color: "text-blue-400" },
                { name: "Node.js", color: "text-green-400" },
                { name: "MongoDB", color: "text-green-500" },
                { name: "Express.js", color: "text-gray-400" },
                { name: "Flutter", color: "text-blue-500" },
                { name: "Android", color: "text-green-400" },
                { name: "IoT", color: "text-purple-400" },
                { name: "AI/ML", color: "text-yellow-400" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                  <span className={`text-sm font-medium ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="text-center mt-16">
        <blockquote className="text-lg md:text-xl text-slate-300 italic max-w-3xl mx-auto">
          "Continuously learning, building, and innovating to create meaningful digital experiences."
        </blockquote>
      </div>
    </section>
  );
};

export default About;