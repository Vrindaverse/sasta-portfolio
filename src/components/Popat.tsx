"use client";

const Popat = () => {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrcTin8-Halnk_BYv-WhcEM8cPsP8QofXpw&s";

  return (
    <div className="max-w-md mx-auto px-4">
      {/* Main container with simple fade-in using CSS */}
      <div className="text-center opacity-0 animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Hire Me
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          If you want to hire me then:
        </p>
        <p className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-6">
          Place your tongue outside and while looking upward say "onee-chan" or "senpai"
        </p>

        {/* Image */}
        <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-800/20 dark:bg-gray-700/30">
          <img
            src={imageUrl}
            alt="Tongue Out"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:scale-105">
            Accept
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-md transition-transform duration-200 hover:scale-105">
            Decline
          </button>
        </div>
      </div>

      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Popat;
