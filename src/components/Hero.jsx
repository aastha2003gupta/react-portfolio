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
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [roles]);

  return (
    <div className="border-b border-neutral-900 pb-5 lg:pb-10 lg:mb-10">
      <div className="flex flex-col lg:flex-row lg:gap-12 items-center lg:items-start">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left pb-6 text-4xl lg:text-7xl font-thin tracking-tight"
          >
            Aastha Gupta
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:text-left"
            style={{ lineHeight: '1.2' }}
          >
            {currentRole}
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-xl py-6 font-light text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right Section (Profile Image) */}
        {/*<div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src="src/assets/profile/hero.svg"
            alt="Profile"
            className="max-w-[200px] md:max-w-[300px] lg:max-w-[350px]"
          />
        </div>*/}
      </div>
    </div>
  );
};

export default Hero;

