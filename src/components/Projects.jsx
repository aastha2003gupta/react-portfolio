import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine how many projects to display
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <div className="border-b border-neutral-950 pb-8">
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
       className="my-20 text-center text-4xl">Projects</motion.h1>

      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}} 
      className="flex flex-wrap justify-center gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/4 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              height: "450px",
              maxWidth: "300px",
              background: "rgba(0, 0, 0, 0.2)", // Semi-transparent background
              backdropFilter: "blur(10px)", // Blur effect
              WebkitBackdropFilter: "blur(10px)", // Safari support
              border: "1px solid rgba(250, 255, 255, 0.1)", // Light border for glass effect
            }}
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="h-48 w-full object-cover transition-opacity duration-300 opacity-70 hover:opacity-100"
            />

            {/* Project Details */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-white truncate">
                {project.title}
              </h3>

              {/* Description Section */}
              <div className="flex-grow overflow-y-auto mb-4 max-h-20">
                <p className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-black/50 px-2 py-1 text-sm font-medium text-purple-400 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links (Pinned at the bottom) */}
              <div className="mt-auto flex justify-center gap-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon"
                    aria-label="Project Link"
                  >
                    <AiOutlineLink size={20} className="text-white" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={20} className="text-white" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More / Show Less Button */}
      {PROJECTS.length > 6 && (
        <div className="flex justify-center mt-11 mb-7">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-purple-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
