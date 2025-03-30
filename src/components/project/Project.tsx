import ProjectTile, { ProjectProp } from "./ProjectTile";

export default function Project() {

    const projectsData: ProjectProp[] = [
        {
            name: "Well Wisher",
            icon: "icon",
            about: ["about"],
            date: "date",
            links: [{link: "https://www.google.com", about: "Must be link", icon: "icon"},
                    {link: "https://www.google.com", about: "Must be link2", icon: "icon"}
            ],
            technologies: [{name: "tech1", icon: "icon1"}]
        }
    ];

    const projects = projectsData.map((project)=> (
        <ProjectTile 
            key={project.name + project.date}
            icon={project.icon} 
            name={project.name} 
            about={project.about}
            date={project.date}
            links={project.links} 
            technologies={project.technologies}/>
    ));

  return (
    <>
      <p className="text-center text-3xl sm:text-4xl font-semibold mt-32 mb-10">
        PROJECTS
      </p>
      <div>{projects}</div>
    </>
  );
}
