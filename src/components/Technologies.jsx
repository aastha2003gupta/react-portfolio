import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma } from "react-icons/fa";
import { SiC, SiCplusplus, SiMongodb, SiMysql, SiTensorflow, SiJupyter, SiScikitlearn } from "react-icons/si";
import { motion } from "framer-motion";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-6 p-4">
        {/* React */}
        <div className="rounded-2xl p-4 animate-float-up">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        {/* Java */}
        <div className="rounded-2xl  p-4 animate-float-down">
          <FaJava className="text-5xl text-blue-600" />
        </div>
        {/* Python */}
        <div className="rounded-2xl p-4 animate-float-up">
          <FaPython className="text-5xl text-yellow-400" />
        </div>
        {/* C */}
        <div className="rounded-2xl  p-4 animate-float-down">
          <SiC className="text-5xl text-blue-500" />
        </div>
        {/* C++ */}
        <div className="rounded-2xl  p-4 animate-float-up">
          <SiCplusplus className="text-5xl text-blue-500" />
        </div>
        {/* MongoDB */}
        <div className="rounded-2xl  p-4 animate-float-down">
          <SiMongodb className="text-5xl text-green-500" />
        </div>
        {/* SQL */}
        <div className="rounded-2xl  p-4 animate-float-up">
          <SiMysql className="text-5xl text-orange-500" />
        </div>
        {/* TensorFlow */}
        <div className="rounded-2xl  p-4 animate-float-down">
          <SiTensorflow className="text-5xl text-orange-500" />
        </div>
        {/* Jupyter */}
        <div className="rounded-2xl  p-4 animate-float-up">
          <SiJupyter className="text-5xl text-orange-600" />
        </div>
        {/* HTML */}
        <div className="rounded-2xl  p-4 animate-float-down">
          <FaHtml5 className="text-5xl text-red-500" />
        </div>
        {/* JavaScript */}
        <div className="rounded-2xl  p-4 animate-float-up">
          <FaJsSquare className="text-5xl text-yellow-500" />
        </div>
        {/* CSS */}
        <div className="rounded-2xl  p-4 animate-float-down">
          <FaCss3Alt className="text-5xl text-blue-600" />
        </div>
        {/* Figma */}
        <div className="rounded-2xl  p-4 animate-float-up">
          <FaFigma className="text-5xl text-pink-500" />
        </div>
        {/* Scikit-Learn */}
        <div className="rounded-2xl  p-4 animate-float-down">
          <SiScikitlearn className="text-5xl text-orange-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
