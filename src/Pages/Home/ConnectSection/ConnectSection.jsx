import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { Link } from "react-router";
// import { Link as ScrollLink } from "react-scroll"; // for smooth scroll

const ConnectSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 250, // adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  return (
    <section className=" text-white py-8 pb-12 px-4 text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-calistoga">
          Let&apos;s Connect{" "}
          <span className="inline-block animate-pulse">💞</span>
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Have an idea, a project, or just want to say hi? Drop me a message
          below or connect with me on social — I&apos;d love to hear from you!{" "}
          <span>💖</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            onClick={() => handleScroll("contact")}
            className="bg-white text-black px-5 py-0 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-300 hover:-translate-y-2 cursor-pointer transition h-10">
            <IoMdChatbubbles />
            Leave a Message
          </Link>

          <a
            href="https://www.linkedin.com/in/sayed-sheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-600 px-5 py-0 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-300 hover:-translate-y-2 transition h-10 group hover:text-black">
            <FaLinkedin className="text-[#0A66C2] group-hover:text-black" />
            LinkedIn
          </a>

          <a
            href="https://github.com/SayedSheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-600 px-5 py-0 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-300 hover:-translate-y-2 transition h-10 group hover:text-black">
            <FaGithub className="group-hover:text-black" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
