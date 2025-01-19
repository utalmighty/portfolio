import SkillButton from "./SkillButton";

export default function Skills() {
  const skills = [
    {
      icon: "Java",
      name: "Java",
      about: "Programming Language",
      yoe: 3,
    },
    {
      icon: "SpringBoot",
      name: "SpringBoot",
      about: "REST-API Framework",
      yoe: 3,
    },
    {
      icon: "React",
      name: "React",
      about: "Frontend Library",
      yoe: 1,
    },
    {
      icon: "Python",
      name: "Python",
      about: "Programming Language",
      yoe: 2,
    },
    {
      icon: "PostgreSQL",
      name: "PostgreSQL",
      about: "Relational Database",
      yoe: 2,
    },
  ];

  const skillItems = skills.map((skill) => (
    <SkillButton
      name={skill.icon}
      icon={skill.name}
      about={skill.about}
      yoe={skill.yoe}
    />
  ));

  return (
      <>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row justify-center">
            {skillItems}
          </div>
        </div>
      </>
    );
}
