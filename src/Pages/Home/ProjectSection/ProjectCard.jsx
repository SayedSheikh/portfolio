// ProjectCard.jsx
import { Link } from "react-router";
import CustomButton from "../../Shared/CustomeBtn/CustomButton";
import { GoLinkExternal } from "react-icons/go";
import { LuGithub } from "react-icons/lu";

const ProjectCard = ({ title, image, route, description, link }) => {
  return (
    <div className="border border-[#B0B0B850] rounded-lg shadow-lg w-full flex flex-col-reverse md:flex-row justify-between items-center gap-7 hover:bg-[#B0B0B810] hover:border-[#B0B0B8] duration-200 ">
      <div className="flex-1 p-4 peer">
        <h3 className="text-xl font-semibold text-blue-500 mb-5">{title}</h3>
        <p className="text-sm text-gray-300 my-3 line-clamp-3">{description}</p>
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
      <div className="w-full md:w-[52%] scale-[1.01] peer-hover:scale-110 duration-150">
        <img
          src={image}
          alt={title}
          className="rounded-[4px] h-[215px] object-cover w-full  "
        />
      </div>
    </div>
  );
};

export default ProjectCard;
