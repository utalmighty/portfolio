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
  const links = item.links.map((link) => (
    <div className="flex flex-wrap">
      <a id={link.about} href={link.link} target="blank">
        <div className="items-center rounded-md border font-semibold border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
          <img src={link.icon} className="w-4"></img>
          <span>{link.about}</span>
        </div>
      </a>
    </div>
  ));

  const technologies = item.technologies.map((tech) => (
    <div className="mt-2 flex flex-wrap">
      <div className="inline-flex bg-gray-200 text-gray-600 items-center rounded-md border font-semibold border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
        <img src={tech.icon} className="mr-1 w-3 h-3"></img>
        <span>{tech.name}</span>
      </div>
    </div>
  ));

  return (
    <>
      <div className="m-10 w-full md:w-1/4 shadow-lg bg-white border rounded-xl flex flex-col">
        <div className="">
          <img
            className="p-2 h-48 w-full object-contain hover:scale-105 transition duration-300"
            src={item.icon} />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
              {item.name}
            </h4>

            <div className="mb-2">
              <span className="text-gray-600 text-sm">{item.about}</span>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-wrap gap-1">{technologies}</div>
            <div className="mt-4 flex flex-wrap gap-1">{links}</div>
          </div>
        </div>
      </div>
    </>
  );
}
