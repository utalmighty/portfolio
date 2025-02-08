import SkillButton from "./SkillButton";
import java from "../../assets/java.svg";
import spring from "../../assets/spring.svg";
import react from "../../assets/react.svg";
import python from "../../assets/python.svg";
import postgre from "../../assets/postgre.svg";

export default function Skills() {
  const skills = [
    {
      icon: java,
      name: "Java",
      about: "Programming Language",
      yoe: 3,
    },
    {
      icon: spring,
      name: "SpringBoot",
      about: "REST-API Framework",
      yoe: 3,
    },
    {
      icon: react,
      name: "React",
      about: "UI Library",
      yoe: 1,
    },
    {
      icon: python,
      name: "Python",
      about: "Programming Language",
      yoe: 2,
    },
    {
      icon: postgre,
      name: "PostgreSQL",
      about: "Relational Database",
      yoe: 2,
    },
  ];

  const skillItems = skills.map((skill) => (
    <SkillButton 
      key={skill.name}
      name={skill.name}
      icon={skill.icon}
      about={skill.about}
      yoe={skill.yoe}
    />
  ));

  return (
    <>  
      <p className="text-center text-3xl sm:text-4xl font-semibold mt-32 mb-10">SKILLS</p>
        <div className="flex mb-3">
          <div className="w-0 md:w-1/6"></div>
          <div className="w-full md:w-4/6 flex md:flex-row flex-wrap">
            {skillItems}
          </div>
          <div className="w-0 md:w-1/6"></div>
        </div>
    </>
  );
}
