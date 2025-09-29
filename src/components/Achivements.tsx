"use client";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "SIH-2024 Finalist Team Mentor",
    description: "Guided team to national-level Smart India Hackathon finals",
    icon: "🏆",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "GIH-2024 Finalist",
    description: "Reached finals in Global Innovation Hackathon 2024",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "TDC Web Dev Hackathon Winner",
    description: "Won first place in TDC's web development competition",
    icon: "🥇",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "FutureHack 2.0 2nd Place",
    description: "Secured second position in FutureHack 2.0 hackathon",
    icon: "🥈",
    color: "from-green-500 to-emerald-500"
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-violet-500 mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900 rounded-2xl border border-gray-700 p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
