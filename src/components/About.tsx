"use client";

import { useEffect, useState } from "react";

const skills = [
  { name: "React", value: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Android Dev", value: 80, color: "from-green-500 to-emerald-500" },
  { name: "Linux", value: 85, color: "from-gray-500 to-gray-700" },
  { name: "Figma", value: 75, color: "from-pink-500 to-purple-500" },
  { name: "UI/UX Design", value: 80, color: "from-violet-500 to-fuchsia-500" },
];

const About = () => {
  const [angle, setAngle] = useState(0);
  const radius = 120;

  useEffect(() => {
    let animation: number;
    const rotate = () => {
      setAngle(prev => (prev + 0.3) % 360);
      animation = requestAnimationFrame(rotate);
    };
    rotate();
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-gray-200 about-bg px-4 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Illustration */}
        <div className="flex-1 flex justify-center md:justify-end mb-12 md:mb-0">
          <img
            src="https://i.pinimg.com/474x/df/73/f8/df73f85d009301f59dc58e894acebce1.jpg"
            alt="Vrinda"
            className="w-72 md:w-96 rounded-xl drop-shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-2"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 md:pl-10">
          <h2 className="text-4xl font-extrabold text-violet-500 mb-6 animate-fadeIn">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-300 animate-fadeIn delay-100">
            Hey! 👋 I’m <span className="font-semibold text-violet-400">Vrinda</span>, a passionate <span className="text-purple-400">2nd year B.Tech CSE student</span> at <span className="text-pink-400">Technocrats Institute of Technology & Science</span>.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-300 animate-fadeIn delay-200">
            Proud member of the <span className="text-violet-400">TDC Community</span>, exploring <span className="text-violet-300">web development</span>, <span className="text-purple-300">UI/UX design</span>, and <span className="text-pink-300">creative tech projects</span>.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-300 animate-fadeIn delay-300">
            Beyond coding, I love playing <span className="text-emerald-400">chess</span>, writing <span className="text-pink-400">poetry</span>, and expressing myself through <span className="text-violet-400">creative writing</span>.
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold shadow-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 animate-fadeIn delay-400"
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* Revolving Skill Wheel */}
      <div className="relative w-full h-[300px] mt-20 flex items-center justify-center">
        <div className="relative w-32 h-32 rounded-full bg-gray-800/40 flex items-center justify-center">
          <span className="text-white font-bold text-lg z-10">Skills</span>

          {skills.map((skill, idx) => {
            const angleDeg = (idx * (360 / skills.length) + angle) * (Math.PI / 180);
            const x = radius * Math.cos(angleDeg);
            const y = radius * Math.sin(angleDeg);
            return (
              <div
                key={skill.name}
                className={`absolute w-20 h-20 rounded-full flex flex-col items-center justify-center text-white font-semibold shadow-lg bg-gradient-to-r ${skill.color}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <span className="text-sm">{skill.name}</span>
                <span className="text-xs">{skill.value}%</span>
              </div>
            );
          })}
        </div>
      </div>

      <style >{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default About;
