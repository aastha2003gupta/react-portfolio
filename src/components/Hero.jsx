import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const roles = ["Developer", "Designer", "Data Geek", "WordSmith"];
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length; // Loop back to the start
        return roles[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [roles]);

  return (
    <div className="border-b border-neutral-900 pb-5 lg:pb-5 lg:mb-10">
      <div className="flex flex-wrap lg:gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-4xl lg:text-7xl font-thin tracking-tight"
            >
              Aastha Gupta
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              style={{ lineHeight: '1.2' }}  // Adjust this value as needed
            >
              {currentRole}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section (optional for profile image) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          {/* Uncomment if you have a profile image */}
          {/* <motion.img 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          src={profile} alt="Profile" className="max-w-xs lg:max-w-md" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;