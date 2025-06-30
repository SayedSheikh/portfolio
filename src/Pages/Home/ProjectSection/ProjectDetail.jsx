import { Link, useLocation, useParams } from "react-router";
import spareImage from "./../../../../public/spareABite.jpg";
import flatifyImage from "./../../../../public/flatify.jpg";
import appOceanImage from "./../../../../public/appOcean.jpg";
import Navbar from "../Navbar/Navbar";
import CustomButton from "../../Shared/CustomeBtn/CustomButton";
import { LuGithub } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";
import { useEffect } from "react";

const projects = {
  spareabite: {
    title: "Spare A Bite",
    techStack: ["React", "Firebase", "TailwindCSS", "DaisyUI", "Framer Motion"],
    liveLink: "https://spare-a-bite.web.app",
    github: "https://github.com/SayedSheikh/SpareABite",
    description:
      "Spare A Bite is a food-sharing platform designed to reduce food waste by connecting local donors with recipients in need. It features real-time updates, Firebase authentication, and a clean, modern UI built using React and TailwindCSS. The platform encourages sustainable community support and promotes food accessibility.",
    challenges:
      "Implementing real-time food updates and managing Firebase authentication flow.",
    futurePlans: "Add location-based filters and admin moderation tools.",
    image: spareImage,
  },
  flatify: {
    title: "Flatify",
    techStack: ["React", "Firebase", "TailwindCSS", "DaisyUI", "Swiper"],
    liveLink: "https://flatify-6a56c.web.app",
    github: "https://github.com/SayedSheikh/Flatify-client",
    description:
      "Flatify is a feature-rich web application that allows users to browse, post, and manage flat or roommate listings with ease. It includes Firebase authentication, responsive design, carousel banners, user interaction through likes and reviews, and smooth animations, offering a complete property sharing experience.",
    challenges:
      "Handling responsive Swiper layouts and multi-user post management.",
    futurePlans: "Add chat system and more filters for search.",
    image: flatifyImage,
  },
  appocean: {
    title: "AppOcean",
    techStack: ["React", "Firebase", "TailwindCSS", "Swiper", "React Icons"],
    liveLink: "https://app-ocean-42dc1.web.app",
    github: "https://github.com/SayedSheikh/AppOcean",
    description:
      "AppOcean is a sleek and fully responsive app store built with React, offering an intuitive interface for discovering applications by category. It incorporates Firebase for secure authentication, dynamic app listing components, smooth routing, and animated user feedback for a rich browsing experience.",
    challenges:
      "Structuring category-based dynamic rendering and integrating Firebase securely.",
    futurePlans: "Add download tracking and user-based recommendations.",
    image: appOceanImage,
  },
};

const ProjectDetail = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <div className="text-white p-8">Project not found.</div>;

  return (
    <div>
      <Navbar location={location.pathname} />
      <div className="min-h-screen max-w-[900px] mx-auto text-white p-8 mt-15">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-6 w-full max-w-4xl mx-auto"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="mb-4 text-lg text-gray-300">{project.description}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-blue-500 text-blue-400 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
        <p className="mb-4 text-gray-300">{project.challenges}</p>

        <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
        <p className="mb-4 text-gray-300">{project.futurePlans}</p>

        <div className="space-x-4 mt-6 flex">
          <Link
            target="_blank"
            to={project.github}
            className="text-blue-400 text-sm ">
            <CustomButton
              border={"none"}
              className="flex items-center gap-2 group border h-10 w-25 text-[18px] ">
              <span className="group-hover:text-blue-500">Github</span>

              <LuGithub className="group-hover:text-blue-500 group-hover:scale-125 duration-300" />
            </CustomButton>
          </Link>
          <Link
            target="_blank"
            to={project.liveLink}
            className="text-blue-400 text-sm ">
            <CustomButton
              border={"none"}
              className="flex items-center gap-2 group border h-10 w-20 text-[18px]">
              <span className="group-hover:text-blue-500 mr-1">Site</span>
              <GoLinkExternal className="group-hover:text-blue-500 group-hover:scale-125 duration-300" />
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
