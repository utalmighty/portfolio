import { useState } from "react";
import Institute from "./Institute";
import infosys from "../../assets/infosys.jpg";
import cognizant from "../../assets/cognizant.png";
import aktu from "../../assets/aktu.png";
import cms from "../../assets/cms.png";

export interface TimelineProp {
  icon: string;
  name: string;
  about: string[];
  date: string;
  position: string;
  location: string;
  link: string;
  specialities: SpecialityProp[];
}

interface SpecialityProp {
  name: string;
  icon: string;
}

export default function Tab() {
  const educationTimelineData: TimelineProp[] = [
    {
      icon: aktu,
      name: "Dr. A.P.J Abdul Kalam Technical University",
      about: [
        "Led the campus' robotics club.",
        "GeeksForGeeks campus ambassador.",
      ],
      date: "Aug 2017 - Jul 2021",
      position: "B.Tech (IT)",
      link: "https://drive.google.com/file/d/1nsak49WP5lwip8XTa0ADyU9I0RA_rJeO/view?usp=sharing",
      location: "Lucknow",
      specialities: [],
    },
    {
      icon: cms,
      name: "City Montessori School",
      about: [],
      date: "2016",
      position: "",
      link: "https://drive.google.com/file/d/0Bx29DQgRGsWmelRhVF90bGtQY0E/view?usp=sharing&resourcekey=0-2NXRiJ5o2OSqzMygRTfG_w",
      location: "Lucknow",
      specialities: [],
    },
  ];

  const experienceTimelineData: TimelineProp[] = [
    {
      icon: infosys,
      name: "Infosys",
      about: [
        "Full stack Developer working with Apple's Enginneering Team.",
        "Migrated legacy C-based email authentication system to Java improving performance and monitoring for iCloud email.",
        "Build a custom python script for load testing the scalablity of application.",
        "Improved performance by 20%, handling over 2 Billion emails a day.",
      ],
      date: "Jan 2024 - Present",
      position: "Specialist Programmer",
      link: "exp1 link",
      location: "Pune",
      specialities: [],
    },
    {
      icon: infosys,
      name: "Infosys",
      about: [
        "Developed a highly scalable system for data transformation",
        "Build a custom object storage system in Angular and Springboot, made it accessible using UI and API",
      ],
      date: "Apr 2022 - Jan 2024",
      position: "Digital Specialist Engineer",
      link: "exp2 link",
      location: "Pune",
      specialities: [],
    },
    {
      icon: cognizant,
      name: "Cognizant",
      about: [
        "Responsible for testing the REST-API endpoints",
        "Ensured bug free releases.",
      ],
      date: "Aug 2021 - Feb 2022",
      position: "Programmer Analyst",
      link: "https://drive.google.com/file/d/1WO-eZqcAs6BYVbin4glrw-SPVg5isPqe/view?usp=sharing",
      location: "Remote",
      specialities: [],
    },
    {
      icon: cognizant,
      name: "Cognizant",
      about: [
        "Developed a recruitment management service using Java Springboot.",
      ],
      date: "Dec 2020 - Jun 2021",
      position: "Intern",
      link: "https://drive.google.com/file/d/1PS72w36ekpN05HPQHCLMxpYqqAMI1kZf/view?usp=sharing",
      location: "Remote",
      specialities: [],
    },
  ];

  const educationTimeline = educationTimelineData.map((item) => (
    <Institute
      key={item.name + item.date}
      icon={item.icon}
      name={item.name}
      about={item.about}
      date={item.date}
      position={item.position}
      link={item.link}
      location={item.location}
      specialities={item.specialities}
    />
  ));

  const experienceTimeline = experienceTimelineData.map((item) => (
    <Institute
      key={item.name + item.date}
      icon={item.icon}
      name={item.name}
      about={item.about}
      date={item.date}
      position={item.position}
      link={item.link}
      location={item.location}
      specialities={item.specialities}
    />
  ));

  const [state, setState] = useState("Experience");
  const [timeline, setTimeline] = useState(experienceTimeline);

  function handleClick(newState: string) {
    if (state != newState) {
      setState(newState);
      if (newState == "Education") {
        setTimeline(educationTimeline);
      }
      if (newState == "Experience") {
        setTimeline(experienceTimeline);
      }
    }
  }

  return (
    <>
      <div className="cursor-pointer flex w-full m-3 p-1 border border-slate-300 rounded-lg bg-slate-50 shadow-sm">
        <div
          className={`w-1/2 text-center rounded-md ${
            state == "Experience"
              ? "bg-slate-400 shadow-sm shadow-slate-400"
              : "hover:bg-slate-200"
          }`}
          onClick={() => handleClick("Experience")}
        >
          Experience
        </div>
        <div
          className={`w-1/2 text-center rounded-md ${
            state == "Education"
              ? "bg-slate-400 shadow-sm  shadow-slate-400"
              : "hover:bg-slate-200"
          }`}
          onClick={() => handleClick("Education")}
        >
          Education
        </div>
      </div>
      <div className="relative w-full m-3 border border-gray-300 rounded-lg bg-slate-50 shadow-sm"> {/* 👈🏼 Make this scrollable */}
          <div className="absolute left-[2.75rem] sm:left-[5.5rem] md:left-[5.7rem] lg:left-[5.75rem] top-0 bottom-0 w-[1px] bg-gray-400"></div>
          <div className="ml-5 sm:ml-16">{timeline}</div>
      </div>
    </>
  );
}
