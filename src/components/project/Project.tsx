import github from "../../assets/project/icons/github.svg";
import website from "../../assets/project/icons/website.svg";
import algoviz from "../../assets/project/screenshots/AlgoViz.png";
import Wellwisher from "../../assets/project/screenshots/Wellwisher.png";
import css from "../../assets/technologies/css.svg";
import docker from "../../assets/technologies/docker.svg";
import html from "../../assets/technologies/html.svg";
import java from "../../assets/technologies/java.svg";
import js from "../../assets/technologies/js.svg";
import mongodb from "../../assets/technologies/mongodb.svg";
import node from "../../assets/technologies/nodejs.svg";
import postgre from "../../assets/technologies/postgre.svg";
import rabbitmq from "../../assets/technologies/rabbitmq.svg";
import reactor from "../../assets/technologies/reactor.png";
import spring from "../../assets/technologies/spring.svg";
import ProjectTile, { ProjectProp } from "./ProjectTile";

export default function Project() {
  const projectsData: ProjectProp[] = [
    {
      name: "Well Wisher",
      icon: Wellwisher,
      about: [
        "Well-Wisher, wishes your loved ones on their special occasion via email.",
      ],
      date: "date",
      links: [
        {
          link: "https://github.com/Shashank2707/Well-wisher",
          about: "Github",
          icon: github,
        },
        {
          link: "https://utalmighty.github.io/Hudukian/",
          about: "Website",
          icon: website,
        },
      ],
      technologies: [
        { name: "Java", icon: java },
        { name: "Spring", icon: spring },
        { name: "PostgreSQL", icon: postgre },
        { name: "RabbitMQ", icon: rabbitmq },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
      ],
    },
    {
      name: "Huduk SOS",
      icon: Wellwisher,
      about: ["Self-hosted, non-blocking Simple Object Storage."],
      date: "date",
      links: [
        {
          link: "https://github.com/utalmighty/Huduk-SOS",
          about: "Github",
          icon: github,
        },
      ],
      technologies: [
        { name: "Java", icon: java },
        { name: "MongoDB ", icon: mongodb },
        { name: "Reactor Framework", icon: reactor },
      ],
    },
    {
      name: "P2PFS",
      icon: Wellwisher,
      about: ["Peer to Peer file sharing without size limit."],
      date: "date",
      links: [
        {
          link: "https://github.com/utalmighty/P2PFS",
          about: "Github",
          icon: github,
        },
        {
          link: "https://p2pfs-utalmighty.b4a.run/",
          about: "Website",
          icon: website,
        },
      ],
      technologies: [
        { name: "Java", icon: java },
        { name: "JavaScript", icon: js },
        { name: "Docker", icon: docker },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
      ],
    },
    {
      name: "AC-JS",
      icon: Wellwisher,
      about: [
        "Command line tool with powerful unix-like cat commands written in JavaScript.",
      ],
      date: "date",
      links: [
        {
          link: "https://github.com/utalmighty/AC-JS",
          about: "Github",
          icon: github,
        },
      ],
      technologies: [
        { name: "Node", icon: node },
        { name: "JS", icon: js },
      ],
    },
    {
      name: "Algo Viz",
      icon: algoviz,
      about: ["Algorithm visualization web-based interactive platform."],
      date: "date",
      links: [
        {
          link: "https://github.com/utalmighty/ALGOVIZ",
          about: "Github",
          icon: github,
        },
      ],
      technologies: [
        { name: "HTML", icon: html },
        { name: "JavaScript", icon: js },
        { name: "CSS", icon: css },
      ],
    },
  ];

  const projects = projectsData.map((project) => (
    <ProjectTile
      key={project.name + project.date}
      icon={project.icon}
      name={project.name}
      about={project.about}
      date={project.date}
      links={project.links}
      technologies={project.technologies}
    />
  ));

  return (
    <>
      <p className="text-center text-3xl sm:text-4xl font-semibold mt-16 mb-10">
        PROJECTS
      </p>
      <div className="flex flex-wrap md:flex-row justify-center">
        {projects}
      </div>
    </>
  );
}
