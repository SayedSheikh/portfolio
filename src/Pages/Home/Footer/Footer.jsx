import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-gray-300 text-sm py-4 px-6">
      <hr className="hr-fade mb-2 mx-auto hidden sm:block" />
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-[16px]">
        {/* Left side */}
        <div>© {new Date().getFullYear()} | Portfolio</div>

        {/* Right side */}
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <FaReact className="text-blue-400 animate-spin-slow text-[22px]" />
          <span>by Sayed</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
