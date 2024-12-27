import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AllCards = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <div className="text-white flex items-center justify-center flex-col">
      <AnimatePresence mode="wait">
        {isAnimated && (
          <motion.img
            src="https://i.pinimg.com/736x/c6/05/20/c60520f555c5410082c6d962c04a3091.jpg"
            alt=""
            className="h-40 w-40 rounded-full"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            key="image" // Unique key for animation
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isAnimated && (
          <motion.div variants={textVariants} initial="hidden" animate="visible" key="text" className='flex items-center justify-center flex-col'>
            <h1 className="text-3xl font-semibold mt-10">Welcome to Surah App</h1>
            <p className="m-6">
              &nbsp;Embark on a journey through the Quran. Explore each Surah with
              interactive cards, revealing insights into their meanings and origins.
              <br /> Experience the Quran in a new way. Swipe, flip, and explore
              interactive cards for each Surah, uncovering their rich history and
              meaning.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllCards;