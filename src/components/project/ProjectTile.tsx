export interface ProjectProp {
  icon: string;
  name: string;
  about: string[];
  date: string;
  links: LinkProp[];
  technologies: TechnologiesProp[];
}

interface TechnologiesProp {
  name: string;
  icon: string;
}

interface LinkProp {
  link: string;
  about: string;
  icon: string;
}

export default function ProjectTile(item: ProjectProp) {
  
  const links = item.links.map((link) => 
    <div className="border">
      <a id={link.about} href={link.link} target="blank">
        <div className="flex">
          <img src={link.icon} className="mr-1"></img>
          <span>{link.about}</span>
        </div>
      </a>
    </div>
    );

  const technologies = item.technologies.map((tech)=> 
    <div className="flex">
      <img src={tech.icon} className="mr-1"></img>
      <span>{tech.name}</span>
    </div>
  );

  return (
    <>
      <div className="w-1/4 m-1 shadow-lg">
        <div className="bg-white border rounded-lg overflow-hidden">
          <img className="h-48 w-full object-cover" src={item.icon} />
          <div className="p-6">
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
              {item.name}
            </h4>
            <div className="mb-2">
              <span className="text-gray-600 text-sm">{item.about}</span>
            </div>
            <div>
              {technologies}
            </div>
            <div>
              {links}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
