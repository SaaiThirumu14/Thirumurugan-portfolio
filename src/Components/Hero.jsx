"use client";
import React from "react";
import profileimage from "../assets/profileimg.webp"
import Button from "./Button";

function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for projects
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="block text-white animate-fade-in-up">THIRUMURUGAN</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-fade-in-up delay-300">
                  WEB DEVELOPER
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Crafting digital experiences that blend creativity with functionality. 
              Specialized in modern web technologies and passionate about turning 
              complex problems into simple, beautiful solutions.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['React', 'Next.js', 'TypeScript', 'Node.js'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-white hover:text-white hover:bg-white/5 transition-all"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/20 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-purple-500/20 rounded-lg -rotate-12 group-hover:-rotate-45 transition-transform duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl scale-105"></div>
                <div className="relative bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-2 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
                  <img
                    src={profileimage}
                    alt="Thirumurugan - Web Developer"
                    className="w-80 h-96 sm:w-96 sm:h-[480px] rounded-2xl object-cover shadow-2xl"
                    loading="lazy"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;