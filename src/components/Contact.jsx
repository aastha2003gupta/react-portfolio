import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineDownload } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
       className="my-10 text-center text-3xl">Say Hello :)</motion.h1>

      {/* Contact Card Container */}
      <motion.div
        className="max-w-md mx-auto bg-gray bg-opacity-20 rounded-lg shadow-md p-6 backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Address */}
        <motion.div
          className="text-center mb-4 flex items-center justify-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <AiOutlineEnvironment size={24} className="text-purple-500" />
          <p className="text-gray-300 text-sm">{CONTACT.address}</p>
        </motion.div>

        {/* Email Address */}
        <motion.div
          className="text-center flex items-center justify-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <AiOutlineMail size={24} className="text-purple-500" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-gray-300 border-b border-purple-500 hover:text-purple-400 transition duration-300 text-sm"
          >
            {CONTACT.email}
          </a>
        </motion.div>

        {/* Download CV Section */}
        <div className="mt-4 flex justify-center">
          <motion.a
            href="src\assets\AasthaGupta_August.pdf" // Update this path to your actual CV file
            download="AasthaGupta_CV"
            className="bg-black bg-opacity-10 text-gray-300 hover:bg-purple-600 transition-all duration-300 flex items-center gap-2 py-2 px-6 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AiOutlineDownload size={20} />
            CV
          </motion.a>
        </div>
      </motion.div>

      {/* Footer - Copyright Section */}
      <footer className="text-center mt-8">
        <p className="text-gray-400 text-sm">
          Copyright © 2024 Aastha Gupta
        </p>
      </footer>
    </div>
  );
};

export default Contact;
