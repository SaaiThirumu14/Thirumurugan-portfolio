import React from 'react';

const personalProjectsData = [
  {
    id: 1,
    title: "Todo List App",
    description:
      "A simple todo list app built with React. It allows users to add, edit, and delete tasks with persistent storage.",
    url: "https://todolist-thiru-app.netlify.app/",
    status: "live",
    icon: "✅",
    tags: ["React", "CSS", "Netlify"],
    gradient: "linear-gradient(135deg, #ec4899, #eab308)",
  },
  {
    id: 2,
    title: "News App",
    description:
      "A React app that fetches live news from an API and displays it with category filters and search functionality.",
    url: "https://news-apzz.netlify.app/",
    status: "live",
    icon: "📰",
    tags: ["React", "API", "Bootstrap"],
    gradient: "linear-gradient(135deg, #3b82f6, #10b981)",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "Frontend clone of Spotify with functional components, music UI, and playlist display.",
    url: "https://spotify-clone-p2bm.onrender.com",
    status: "live",
    icon: "🎵",
    tags: ["React", "CSS"],
    gradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    id: 4,
    title: "Hospital Dashboard",
    description:
      "A hospital management dashboard with patient info, doctor scheduling, and appointment tracking.",
    url: "",
    status: "soon",
    icon: "🏥",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  },
  {
    id: 5,
    title: "E-commerce App",
    description:
      "A simple e-commerce application built with React, featuring product listings, a shopping cart, and user authentication.",
    url: "",
    status: "soon",
    icon: "🛒",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    id: 6,
    title: "Chat App",
    description:
      "A real-time chat application using React, Node.js, and Socket.io. It allows users to join rooms and chat live.",
    url: "",
    status: "soon",
    icon: "💬",
    tags: ["React", "Socket.io", "Real-time"],
    gradient: "linear-gradient(135deg, #14b8a6, #3b82f6)",
  },
  {
    id: 7,
    title: "AI Sentiment Analyzer",
    description:
      "A simple AI-based sentiment analyzer with a React frontend and Node.js backend.",
    url: "https://sentiment-analysis-web-ste.onrender.com",
    status: "live",
    icon: "🤖",
    tags: ["React", "Node.js", "AI/ML"],
    gradient: "linear-gradient(135deg, #ec4899, #ef4444)",
  },
];

const collegeProjectsData = [
  {
    id: 1,
    title: "College Safety Maintenance System",
    description:
      "A system that helps communicate maintenance problems occurring in the college, allowing teachers to report them to higher authorities.",
    icon: "🏫",
    tags: ["HTML", "CSS", "PHP"],
    gradient: "linear-gradient(135deg, #ef4444, #ec4899)",
  },
  {
    id: 2,
    title: "College Symposium Website",
    description:
      "I fully worked on the backend functionalities of the website, including email integration and data storage in Firebase.",
    icon: "🌐",
    tags: ["Firebase", "React", "Google Sheets", "Node.js"],
    gradient: "linear-gradient(135deg, #eab308, #f97316)",
  },
  {
    id: 3,
    title: "Smart Parking System",
    description:
      "An IoT-based parking fare collection system using ESP32, OCR for number plate detection, MongoDB for data storage, and QR codes for payments.",
    icon: "🚗",
    tags: ["ESP32", "Node.js", "MongoDB", "OCR", "QR Code"],
    gradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
  },
  {
    id: 4,
    title: "Report Card Generation System",
    description:
      "A report card generation system that automates internal assessment report creation.",
    icon: "📊",
    tags: ["Excel", "Python", "Selenium"],
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
  },
];

const cardStyle = (gradient) => ({
  position: 'relative',
  background: gradient,
  padding: '2px',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
});

const innerCardStyle = {
  background: 'rgba(15, 23, 42, 0.95)', // Dark slate background with transparency
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(71, 85, 105, 0.2)',
  borderRadius: '18px',
  padding: '24px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
};

const tagStyle = {
  display: 'inline-block',
  background: 'rgba(71, 85, 105, 0.3)',
  backdropFilter: 'blur(5px)',
  color: '#e2e8f0',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  margin: '3px',
  fontWeight: '500',
  transition: 'all 0.2s ease',
};

const buttonStyle = {
  background: 'linear-gradient(135deg, #10b981, #059669)',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '12px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '600',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
};

const statusStyle = (color, bgColor) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: color,
  fontWeight: '600',
  background: bgColor,
  padding: '8px 16px',
  borderRadius: '12px',
  border: `1px solid ${color}40`,
});

function ProjectCard({ project }) {
  const isLive = project.status === "live";
  const isSoon = project.status === "soon";
  const isFinished = project.status === "finished";

  const handleLiveClick = () => {
    if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  return (
    <div 
      style={cardStyle(project.gradient)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
        const inner = e.currentTarget.querySelector('[data-inner-card]');
        if (inner) {
          inner.style.background = 'rgba(15, 23, 42, 0.98)';
          inner.style.border = '1px solid rgba(148, 163, 184, 0.3)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        const inner = e.currentTarget.querySelector('[data-inner-card]');
        if (inner) {
          inner.style.background = 'rgba(15, 23, 42, 0.95)';
          inner.style.border = '1px solid rgba(71, 85, 105, 0.2)';
        }
      }}
    >
      <div style={innerCardStyle} data-inner-card>
        <div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#f1f5f9',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}>
            <span style={{ fontSize: '28px' }}>{project.icon}</span>
            {project.title}
          </h3>

          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#cbd5e1',
            marginBottom: '20px',
            opacity: '0.9',
          }}>
            {project.description}
          </p>

          <div style={{ marginBottom: '24px' }}>
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                style={tagStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(148, 163, 184, 0.2)';
                  e.target.style.color = '#f1f5f9';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(71, 85, 105, 0.3)';
                  e.target.style.color = '#e2e8f0';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {isLive ? (
            <button 
              style={buttonStyle} 
              onClick={handleLiveClick}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0px)';
                e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
              }}
            >
              <span>↗</span>
              View Live
            </button>
          ) : isSoon ? (
            <span style={statusStyle('#eab308', 'rgba(234, 179, 8, 0.1)')}>
              <span>⏱</span>
              Coming Soon
            </span>
          ) : isFinished ? (
            <span style={statusStyle('#64748b', 'rgba(100, 116, 139, 0.1)')}>
              <span>✓</span>
              Finished
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const containerStyle = {
    padding: '80px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  };

  const sectionTitleStyle = {
    fontSize: '28px',
    fontWeight: '600',
    color: '#f1f5f9',
    marginBottom: '32px',
    paddingLeft: '16px',
    borderLeft: '4px solid transparent',
    borderImage: 'linear-gradient(135deg, #ec4899, #8b5cf6) 1',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px',
    marginBottom: '80px',
  };

  return (
    <div style={containerStyle}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: -1,
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: -1,
      }} />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-300 text-transparent bg-clip-text">
          🚀 My Projects
        </h2>
      </div>

      <h3 style={sectionTitleStyle}>
        💻 Personal Projects
      </h3>
      <div style={gridStyle}>
        {personalProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h3 style={sectionTitleStyle}>
        🎓 College Projects
      </h3>
      <div style={gridStyle}>
        {collegeProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;