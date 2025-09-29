"use client";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
}

const ProjectCard = ({ name, description, link }: ProjectCardProps) => {
  let cardRef: HTMLAnchorElement | null;

  // Throttled tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardRef.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef) return;
    cardRef.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <a
     ref={(el) => {
  cardRef = el; // assign to your variable
}}
      href={link}
      target="_blank"
      className="group relative block cursor-pointer rounded-2xl bg-gray-900 border border-gray-700 p-6 shadow-lg overflow-hidden transition-transform duration-300 will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient glow using CSS */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white group-hover:text-violet-400 mb-2 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "TDC Website",
      description: "Official TDC community website with interactive UI & animations.",
      link: "#",
    },
    {
      name: "Mithyadarpan",
      description: "Open-source project contributions with UI/UX improvements.",
      link: "#",
    },
    {
      name: "Dhangana",
      description: "Budget management app for tracking personal finances.",
      link: "#",
    },
    {
      name: "KeyType",
      description: "Typing practice platform with performance metrics.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative w-full py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-violet-500 mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
