import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import Popat from "./Popat"; // Make sure to import your Popat component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [popatOpen, setPopatOpen] = useState(false);
  const openPopat = () => setPopatOpen(true);
  const closePopat = () => setPopatOpen(false);

  return (
    <div>
      <header className="absolute w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* yaha hoga mera logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
              V
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              Vrindaverse
            </span>
          </motion.div>

          {/* nav ka bar and pub */}
          <nav className="lg:flex hidden space-x-8">
            {["HOME", "ABOUT", "PROJECTS", "ACHIEVEMENTS", "CONTACT"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + index * 0.2,
                  }}
                  className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                  href="#"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            )}
          </nav>

          {/* socials mere you can be friendss with me you gf me bf*/}
          <div className="md:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
              href="#"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              href="#"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
              href="#"
            >
              <FiInstagram className="w-5 h-5" />
            </motion.a>
          </div>

          {/* koi mujhe hire kyu karega */}
          <motion.button
            onClick={openPopat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500 hidden md:block"
          >
            HIRE ME
          </motion.button>

          {/* mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={toggleMenu}
              className="text-gray-300"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* mobile dropdown */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
        >
          <nav className="flex flex-col space-y-3">
            {["HOME", "ABOUT", "PROJECTS", "ACHIEVEMENTS", "CONTACT"].map(
              (item) => (
                <a
                  onClick={toggleMenu}
                  className="text-gray-300 font-medium py-2"
                  key={item}
                  href="#"
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-5">
              <a href="#">
                <FiGithub className="h-5 w-5 text-gray-300" />
              </a>
              <a href="#">
                <FiLinkedin className="h-5 w-5 text-gray-300" />
              </a>
              <a href="#">
                <FiInstagram className="h-5 w-5 text-gray-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Popat component */}
        <AnimatePresence>
          {popatOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 relative"
              >
                <button 
                  onClick={closePopat}
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                >
                  <FiX className="w-5 h-5" />
                </button>
                
                <Popat />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;