import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaGoogleDrive,
} from "react-icons/fa";
import CustomButton from "../../Shared/CustomeBtn/CustomButton";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
const quoteColors = [
  "text-red-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-pink-400",
  "text-purple-400",
];

const HeroSection = () => {
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % quoteColors.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="my-28 px-4 text-white bg-[#030712]">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row-reverse item-start md:items-center justify-between gap-8">
        {/* Image Section */}
        <div
          className="w-[180px] h-[250px] overflow-hidden rounded-[8px]
         shadow-[0px_0px_60px_-5px_rgba(0,0,255,0.5)] border border-blue-700">
          <img
            src="/picofme.png" // Replace with your image path
            alt="Sayed Sheikh"
            className="w-full h-full object-cover"
          />
        </div>
        {/* shadow-[0px_0px_60px_-15px_rgba(0,0,255,0.5)] */}

        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-0 font-calistoga">
            Hi, Sayed here.
          </h1>
          {/* <p className="text-lg text-gray-300 mb-3">Web Developer & Learner</p> */}
          <div
            className={`${quoteColors[colorIndex]} transition-colors duration-1000 font-cookie`}>
            <TypeAnimation
              sequence={[
                "Web Developer.", // Types 'One'
                1200, // Waits 1s
                "Learner..", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "Problem Solver...", // Deletes 'One' and types 'Two'
                1100, // Waits 2s
                "Problem Solver & Thinker...", // Deletes 'One' and types 'Two'
                1300, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2rem", display: "inline-block" }}
              className={` font-500`}
            />
          </div>
          <p className="text-gray-400 mb-4">
            Passionate about building interactive web applications.
            <br />
            Always exploring new technologies and creative solutions.
          </p>

          {/* Buttons/Icons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="https://drive.google.com/file/d/10tJmGqNj6ZH4k-nu3D50Fn-KHrn6nQ3x/view?usp=drive_link"
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
