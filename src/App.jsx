import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tools from "./Components/Tools";
import Projects from "./Components/Projects";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-black text-white overflow-x-hidden">
      {/* 🌌 Prismatic Aurora Burst Background */}
      <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    }}
  />
  <Navbar/>

      {/* 🔹 Main Content */}
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="tools">
          <Tools />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
            <Form/>
        </section>
      </main>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}

export default App;
