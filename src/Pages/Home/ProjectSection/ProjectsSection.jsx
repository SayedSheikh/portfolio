// ProjectsSection.jsx
import ProjectCard from "./ProjectCard";
import spareImage from "./../../../../public/spareABite.jpg";
import flatifyImage from "./../../../../public/flatify.jpg";
import appOceanImage from "./../../../../public/appOcean.jpg";

const links = [
  {
    github: "https://github.com/SayedSheikh/SpareABite",
    site: "https://spare-a-bite.web.app",
  },
  {
    github: "https://github.com/SayedSheikh/Flatify-client",
    site: "https://flatify-6a56c.web.app",
  },
  {
    github: "https://github.com/SayedSheikh/AppOcean",
    site: "https://app-ocean-42dc1.web.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 text-white">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-calistoga">Projects</h2>
        <div className="flex flex-col gap-6">
          <ProjectCard
            link={links[0]}
            title="Spare A Bite"
            image={spareImage}
            route="/projects/spareabite"
            description="Spare A Bite is a food-sharing platform designed to reduce food waste by connecting local donors with recipients in need. It features real-time updates, Firebase authentication, and a clean, modern UI built using React and TailwindCSS. The platform encourages sustainable community support and promotes food accessibility."
          />
          <ProjectCard
            link={links[1]}
            title="Flatify"
            image={flatifyImage}
            route="/projects/flatify"
            description="Flatify is a feature-rich web application that allows users to browse, post, and manage flat or roommate listings with ease. It includes Firebase authentication, responsive design, carousel banners, user interaction through likes and reviews, and smooth animations, offering a complete property sharing experience."
          />
          <ProjectCard
            link={links[2]}
            title="AppOcean"
            image={appOceanImage}
            route="/projects/appocean"
            description="AppOcean is a sleek and fully responsive app store built with React, offering an intuitive interface for discovering applications by category. It incorporates Firebase for secure authentication, dynamic app listing components, smooth routing, and animated user feedback for a rich browsing experience."
          />
        </div>
        <hr className="hr-fade mt-12 mx-auto hidden sm:block" />
      </div>
    </section>
  );
};

export default ProjectsSection;
