// ProjectCard.jsx
import { Link } from "react-router";
import CustomButton from "../../Shared/CustomeBtn/CustomButton";
import { GoLinkExternal } from "react-icons/go";
import { LuGithub } from "react-icons/lu";

const ProjectCard = ({ title, image, route, description, link }) => {
  return (
    <div className="border border-[#B0B0B850] rounded-xl shadow-lg p-4 w-full flex flex-col-reverse md:flex-row justify-between items-center gap-7 hover:bg-[#B0B0B810] hover:border-[#B0B0B8] duration-200">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-300 mb-3 line-clamp-3">{description}</p>
        <div className="flex gap-2">
          <Link to={route} className="text-blue-400 text-sm ">
            <CustomButton
              border={"none"}
              className="flex items-center gap-2 group">
              <span className="group-hover:text-blue-500">Details</span>
              <GoLinkExternal className="group-hover:text-blue-500 group-hover:scale-125 duration-300" />
            </CustomButton>
          </Link>
          <Link
            target="_blank"
            to={link.github}
            className="text-blue-400 text-sm ">
            <CustomButton
              border={"none"}
              className="flex items-center gap-2 group">
              <span className="group-hover:text-blue-500">Github</span>

              <LuGithub className="group-hover:text-blue-500 group-hover:scale-125 duration-300" />
            </CustomButton>
          </Link>
          <Link
            target="_blank"
            to={link.site}
            className="text-blue-400 text-sm ">
            <CustomButton
              border={"none"}
              className="flex items-center gap-2 group">
              <span className="group-hover:text-blue-500">Site</span>
              <GoLinkExternal className="group-hover:text-blue-500 group-hover:scale-125 duration-300" />
            </CustomButton>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[40%]">
        <img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full border border-zinc-700"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
