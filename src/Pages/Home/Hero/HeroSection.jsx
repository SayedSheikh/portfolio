// src/components/HeroSection.jsx
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaGoogleDrive,
} from "react-icons/fa";
import CustomButton from "../../Shared/CustomeBtn/CustomButton";

const HeroSection = () => {
  return (
    <section className="my-25 px-4 text-white bg-[#030712]">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row-reverse item-satrt md:items-center justify-between gap-8">
        {/* Image Section */}
        <div className="w-[180px] h-[250px] overflow-hidden rounded-xl shadow-lg">
          <img
            src="/sayed.jpg" // Replace with your image path
            alt="Sayed Sheikh"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-calistoga">
            Hi, Sayed here.
          </h1>
          <p className="text-lg text-gray-300 mb-3">Web Developer & Learner</p>
          <p className="text-gray-400 mb-4">
            Passionate about building interactive web applications.
            <br />
            Always exploring new technologies and creative solutions.
          </p>

          {/* Buttons/Icons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1U-bZQPTC7DpZWxZAeDVcUZHM7PAR5qVN/view"
              target="_blank">
              <CustomButton className="flex items-center gap-2 ">
                <FaGoogleDrive className="" />{" "}
                <span className="text-blue-400">Resume</span>
              </CustomButton>
            </a>
            <a
              href="https://www.linkedin.com/in/sayed-sheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 text-xl">
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SayedSheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl">
              <FaGithub />
            </a>
            <a
              href="sayedsheikh9@gmail.com"
              className="text-gray-300 hover:text-red-400 text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
