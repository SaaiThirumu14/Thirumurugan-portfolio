"use client";
import React from "react";
import profileimage from "../assets/profileimg.webp"
import Button from "./Button";

function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full text-white bg-gradient-to-br px-8 md:px-12 lg:px-20 mt-28">
      {/* Left Content */}
      <div className="flex flex-col lg:items-start text-center lg:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-slate-300 text-transparent bg-clip-text">
          HEY, I'M THIRUMURUGAN
        </h1>

        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
          A passionate web developer with a knack for creating dynamic and
          responsive websites. I specialize in building user-friendly
          interfaces and seamless user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#about"
            className="transition-transform hover:scale-105"
          >
            <Button name="About me" />
          </a>
          
          <a 
            href="#contact"
            className="transition-transform hover:scale-105"
          >
            <Button name="Get In Touch" />
          </a>
        </div>
      </div>

      {/* Right Image with Glow Effect */}
      <div className="relative mt-12 lg:mt-0 lg:ml-12">
        <div className="absolute -inset-6 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-2xl rounded-full animate-pulse"></div>
        <img
          src={profileimage} // Add your actual image path here
          alt="Thirumurugan - Web Developer"
          className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl object-cover shadow-2xl border border-white/10"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;