"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

// Lazy-load Spline
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplinePlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/10 to-purple-900/10 rounded-2xl">
    <div className="text-center animate-pulse">
      <div className="text-5xl mb-2">🎨</div>
      <p className="text-gray-400 text-sm">Loading 3D Model...</p>
    </div>
  </div>
);

const Hero = () => {
  const [loadSpline, setLoadSpline] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { margin: "-200px", once: true });

  useEffect(() => {
    if (isInView) setLoadSpline(true);
  }, [isInView]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden hero-bg"
    >
      {/* subtle radial background */}
      <motion.div
        className="absolute inset-0 hero-radial"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-violet-500">Vrindaverse</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            I’m Vrinda, an engineer, developer, and creator.  
            Building cool things with <span className="text-violet-400">AI</span>,  
            <span className="text-purple-400"> Web</span>, and{" "}
            <span className="text-pink-400">Design</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition-all font-semibold"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-500 hover:border-violet-500 transition-all font-semibold"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Spline */}
        <motion.div
          className="mt-10 md:mt-0 w-full md:w-1/2 flex-shrink-0 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ height: "80vh", minHeight: "500px" }} // responsive height
        >
          <Suspense fallback={<SplinePlaceholder />}>
            {loadSpline && (
              <Spline
                scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
                className="w-full h-full "
              />
            )}
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
