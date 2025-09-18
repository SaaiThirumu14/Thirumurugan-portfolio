import { Button } from "../Components/Button";

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
    gradient: "from-pink-500 to-yellow-500",
  },
  {
    id: 2,
    title: "News App",
    description:
      "A React app that fetches live news from an API and displays it with category filters and search functionality.",
    url: "", // 🔹 replace with deployment URL when ready
    status: "soon",
    icon: "📰",
    tags: ["React", "API", "Bootstrap"],
    gradient: "from-blue-500 to-green-500",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "Frontend clone of Spotify with functional components, music UI, and playlist display.",
    url: "",
    status: "finished",
    icon: "🎵",
    tags: ["React", "CSS"],
    gradient: "from-green-500 to-emerald-500",
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
    gradient: "from-purple-500 to-pink-500",
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
    gradient: "from-indigo-500 to-purple-500",
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
    gradient: "from-teal-500 to-blue-500",
  },
  {
    id: 7,
    title: "AI Sentiment Analyzer",
    description:
      "A simple AI-based sentiment analyzer with a React frontend and Node.js backend.",
    url: "",
    status: "live",
    icon: "🤖",
    tags: ["React", "Node.js", "AI/ML"],
    gradient: "from-pink-500 to-red-500",
  },
];

// 🎓 College Projects
const collegeProjectsData = [
  {
    id: 1,
    title: "College Safety Maintenance System",
    description:
      "A system that helps communicate maintenance problems occurring in the college, allowing teachers to report them to higher authorities.",
    icon: "🏫",
    tags: ["HTML", "CSS", "PHP"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 2,
    title: "College Symposium Website",
    description:
      "I fully worked on the backend functionalities of the website, including email integration and data storage in Firebase.",
    icon: "🌐",
    tags: ["Firebase", "React", "Google Sheets", "Node.js"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    title: "Smart Parking System",
    description:
      "An IoT-based parking fare collection system using ESP32, OCR for number plate detection, MongoDB for data storage, and QR codes for payments.",
    icon: "🚗",
    tags: ["ESP32", "Node.js", "MongoDB", "OCR", "QR Code"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Report Card Generation System",
    description:
      "A report card generation system that automates internal assessment report creation.",
    icon: "📊",
    tags: ["Excel", "Python", "Selenium"],
    gradient: "from-green-500 to-teal-500",
  },
];

function ProjectCard({ project }) {
  const isLive = project.status === "live";
  const isSoon = project.status === "soon";

  return (
    <Card
      className={`bg-gradient-to-br ${project.gradient} p-1 rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-xl`}
    >
      <CardContent className="bg-black/80 backdrop-blur-lg rounded-2xl p-5 space-y-4 flex flex-col justify-between h-full">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>{project.icon}</span>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-white/10 text-white px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          {isLive ? (
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                View Live
              </a>
            </Button>
          ) : isSoon ? (
            <span className="flex items-center gap-1 text-yellow-300 text-sm font-semibold">
              <Clock className="w-4 h-4" /> Coming Soon
            </span>
          ) : (
            <span className="text-gray-400 text-sm italic">Finished</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          🚀 My Projects
        </h2>

        {/* Personal Projects */}
        <h3 className="text-2xl font-semibold mb-6">💻 Personal Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {personalProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* College Projects */}
        <h3 className="text-2xl font-semibold mb-6">🎓 College Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collegeProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
