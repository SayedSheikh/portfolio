// src/components/Navbar.jsx
import { Link as RouterLink } from "react-router";
import { useEffect, useState } from "react";
import { FaBars, FaGoogleDrive, FaTimes } from "react-icons/fa";
import CustomButton from "../../Shared/CustomeBtn/CustomButton";

const Navbar = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  let navLinks;

  location
    ? (navLinks = [
        // { name: "home", type: "scroll" },
        // { name: "skills", type: "scroll" },
        // { name: "education", type: "scroll" },
        // { name: "projects", type: "scroll" },
        { name: "Home", type: "route", path: "/" },
        // { name: "contact", type: "route", path: "/contact" },
      ])
    : (navLinks = [
        { name: "home", type: "scroll" },
        { name: "skills", type: "scroll" },
        // { name: "education", type: "scroll" },
        { name: "projects", type: "scroll" },
        { name: "contact", type: "scroll" },
        // { name: "blog", type: "route", path: "/blog" },
        // { name: "contact", type: "route", path: "/contact" },
      ]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .filter((link) => link.type === "scroll")
        .map((link) => ({
          id: link.name,
          offsetTop: document.getElementById(link.name)?.offsetTop || 0,
        }));

      const scrollPosition = window.scrollY + 80; // +80 for navbar height

      let current = "home";
      for (let i = 0; i < sections.length; i++) {
        if (scrollPosition >= sections[i].offsetTop) {
          current = sections[i].id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // adjust for navbar height
        behavior: "smooth",
      });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <header
      id="home"
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-transparent">
      <nav className="max-w-[900px] mx-auto px-4 py-5 flex flex-row-reverse justify-between items-center text-white">
        <a
          href="https://drive.google.com/file/d/10tJmGqNj6ZH4k-nu3D50Fn-KHrn6nQ3x/view?usp=drive_link"
          target="_blank"
          className="text-base">
          <CustomButton className="flex items-center gap-2 ">
            <FaGoogleDrive className="" />{" "}
            <span className="text-blue-400">Resume</span>
          </CustomButton>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <RouterLink
            to={"/"}
            className="size-12 border border-sm rounded-full overflow-hidden cursor-pointer">
            <img className=" object-cover" src={"/logo.jpg"} alt="" />
          </RouterLink>

          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`capitalize cursor-pointer text-[18px] ${
                activeSection === link.name && "text-blue-400"
              }`}>
              {link.type === "scroll" ? (
                <button
                  onClick={() => handleScroll(link.name)}
                  className=" transition-colors cursor-pointer capitalize btn-nav">
                  {link.name}
                </button>
              ) : (
                <button className="cursor-pointer">
                  <RouterLink
                    to={link.path}
                    className="hover:text-gray-300 transition-colors ">
                    {link.name}
                  </RouterLink>
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#030712] text-white flex flex-col items-start pl-6 py-4 space-y-4 md:hidden">
            {navLinks.map((link) => (
              <li key={link.name} className="capitalize cursor-pointer">
                {link.type === "scroll" ? (
                  <button
                    onClick={() => handleScroll(link.name)}
                    className="hover:text-gray-300 transition-colors capitalize cursor-pointer">
                    {link.name}
                  </button>
                ) : (
                  <RouterLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-300 transition-colors">
                    {link.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
