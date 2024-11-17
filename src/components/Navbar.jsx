import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMedium} from "react-icons/fa";
import LOGO_AG from '../assets/profile/LOGO_AG.svg';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between lg:py-1 px-1 md:px-1 lg:px-1 mb-20">
      {/* Left Side (Logo or Name if needed) */}
      <div className="flex items-center">
        <img src={LOGO_AG} alt="Aastha Gupta Logo" className="h-13 lg:h-13" />
      </div>

      {/* Right Side (Social Icons) */}
      <div className="flex items-center gap-6 text-2xl">
  <a href="https://github.com/aastha2003gupta" target="_blank" rel="noopener noreferrer">
    <FaGithub className="hover:text-cyan-400 cursor-pointer" />
  </a>
  <a href="https://www.linkedin.com/in/aastha-gupta2003" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
  </a>
  <a href="https://medium.com/@aastha2003gupta" target="_blank" rel="noopener noreferrer">
    <FaMedium className="hover:text-cyan-400 cursor-pointer" />
  </a>
  <a href="https://x.com/pasta_gupta?t=3C5VgcJuw8LdAMeQX_a4kQ&s=09" target="_blank" rel="noopener noreferrer">
    <FaSquareXTwitter className="hover:text-cyan-400 cursor-pointer" />
  </a>
</div>
    </nav>
  );
};

export default Navbar;
