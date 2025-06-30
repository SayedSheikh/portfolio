import CustomButtonSkill from "../../Shared/CustomeBtn/CustomButtonSkill";

const skills = [
  { name: "Java", icon: "/java.svg" },
  { name: "C", icon: "/C-prog.png" },
  { name: "C++", icon: "/c++.png" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "MySql", icon: "/sql.svg" },
  { name: "Linux", icon: "/linux.svg" },
  { name: "JavaScript", icon: "/js.svg" },
  { name: "React.js", icon: "/react.svg" },
  { name: "Nodejs", icon: "/nodejs.svg" },
  { name: "HTML5", icon: "/html5.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "Postman", icon: "/postman.svg" },
  { name: "GitHub", icon: "/github.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Firebase", icon: "/firebase.png" },
  { name: "Motion", icon: "/motion.png" },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="p-6 mt-10">
      <h2 className="text-3xl text-white font-bold mb-5 font-calistoga">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <CustomButtonSkill
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
          />
        ))}
      </div>
      <hr className="hr-fade mt-12 mx-auto hidden sm:block" />
    </section>
  );
};

export default TechnicalSkills;
