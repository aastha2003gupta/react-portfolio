import React from 'react'
import { BLOGS } from '../constants'
import { motion } from 'framer-motion'
const Blogs = () => {
  return (
    <div className='border-b border-neutral-950 pb-8'>
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
       className="my-20 text-center text-4xl">Blogs</motion.h1>
      <motion.div
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}} 
       className="flex flex-col items-center">
        {BLOGS.map((blog, index) => (
          <div
            key={index}
            className="w-full lg:w-3/4 mb-6 px-4 py-4 bg-black rounded-lg shadow-md"
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)", 
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(250, 255, 255, 0.1)", 
            }}
          >
            {/* Add Blog Image */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover transition-opacity duration-300 opacity-70 hover:opacity-100 rounded-t-lg mb-4" // Adjust size and style as needed
            />

            <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
            <p className="text-gray-400 mb-4">{blog.description}</p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 text-lg">
              Read More
            </a>
            <div className="border-t border-gray-600 mt-4"></div> 
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Blogs
