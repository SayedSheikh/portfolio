import { useEffect, useState } from "react";
import "./../../../index.css";

const quoteColors = [
  "text-red-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-pink-400",
  "text-purple-400",
];

const AboutSection = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % quoteColors.length);
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-10 px-4 text-white bg-[#030712]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-3xl font-bold mb-4 font-calistoga">About Me</h2>

        <p className="text-gray-300 leading-relaxed mb-4 text-[18px] md:text-justify">
          I’m a Computer Science student who started programming by trying out
          small coding projects and slowly moved on to building complete web
          apps. I enjoy creating things that not only look good but also work
          smoothly, like dashboards and secure backend systems. Outside of
          coding, I like playing cricket, exploring digital art, and learning
          about new tech. I believe that being curious, consistent, and learning
          from mistakes are the best ways to grow, and I bring that attitude to
          every project I work on.
          <span
            className={`font-semibold transition-colors duration-1000 ${quoteColors[colorIndex]} font-cookie text-[30px] leading-0 relative -top-[3px] inline-flex items-center`}>
            <span className="inline-block w-2 h-[2px] bg-current align-middle mx-1"></span>
            Built to Innovate
          </span>
        </p>

        {/* Animated horizontal line */}
        <div className="overflow-hidden">
          <div className="h-[2px] bg-[#b0b0b8] w-[200px] opacity-0 animate-fade-in-left" />
        </div>
      </div>
      <hr className="hr-fade mt-6 mx-auto hidden sm:block" />
    </section>
  );
};

export default AboutSection;
