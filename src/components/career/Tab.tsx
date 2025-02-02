import { useState } from "react";
import Institute from "./Institute";
import infosys from "../../assets/infosys.jpg";
import cognizant from "../../assets/cognizant.png";
import aktu from "../../assets/aktu.png";
import cms from "../../assets/cms.png"

export interface TimelineProp {
  icon: string;
  name: string;
  about: string[];
  date: string;
  position: string;
  location: string;
  link: string;
  specialities: SpecialityProp[]
}

interface SpecialityProp {
  name: string;
  icon: string;
}

export default function Tab() {

  const educationTimelineData : TimelineProp[] = [
      {
        icon: aktu,
        name: "Dr. A.P.J Abdul Kalam Technical University",
        about: ["point1 edu1 message", "point2 edu1 message"],
        date: "Aug 2017 - Apr 2021",
        position: "Bachelor of Technology (Information Technology)",
        link: "edu1 link",
        location: "Lucknow, Uttar Pradesh",
        specialities: []
      },
      {
        icon: cms,
        name: "City Montessori School",
        about: ["point1 edu2 message", "point2 edu2 message"],
        date: "edu2 date",
        position: "",
        link: "edu2 link",
        location: "Lucknow, Uttar Pradesh",
        specialities: []
      }];

    const experienceTimelineData : TimelineProp[] = [
      {
        icon: infosys,
        name: "Infosys",
        about: ["Full stack Developer working with Apple's Enginneering Team", "point2 exp1 message"],
        date: "Jan 2024 - Present",
        position: "Specialist Programmer",
        link: "exp1 link",
        location: "Pune, Maharashtra",
        specialities: []
      },
      {
        icon: infosys,
        name: "Infosys",
        about: ["point1 exp2 message", "point2 exp2 message"],
        date: "Apr 2022 - Jan 2024",
        position: "Digital Specialist Engineer",
        link: "exp2 link",
        location: "Pune, Maharashtra",
        specialities: []
      },
      {
        icon: cognizant,
        name: "Cognizant",
        about: ["Backend Developer", "point2 exp1 message"],
        date: "Jan 2024 - Present",
        position: "Programmer Analyst",
        link: "exp1 link",
        location: "Remote",
        specialities: []
      },
      {
        icon: cognizant,
        name: "Cognizant",
        about: ["point1 exp2 message", "point2 exp2 message"],
        date: "Apr 2022 - Jan 2024",
        position: "Intern",
        link: "exp2 link",
        location: "Remote",
        specialities: []
      }];

      const educationTimeline = educationTimelineData.map((item)=> (
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

      const experienceTimeline = experienceTimelineData.map((item)=> (
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

      function handleClick(newState:string) {
        if(state != newState) {
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
      <div className="flex w-full m-3 p-1 border border-slate-300 rounded-lg bg-slate-50 shadow-sm">
        <div className={`w-1/2 text-center rounded-md ${state == "Experience" ? "bg-slate-400 shadow-sm shadow-slate-400" : "hover:bg-slate-200"}`} onClick={()=> handleClick("Experience")}>Experience</div>
        <div className={`w-1/2 text-center rounded-md ${state == "Education" ? "bg-slate-400 shadow-sm  shadow-slate-400" : "hover:bg-slate-200"}`} onClick={()=> handleClick("Education")}>Education</div>
      </div>
      <div className="w-full m-3 p-1 border border-gray-300 rounded-lg bg-slate-50 shadow-sm"> {/* 👈🏼 Make this scrollable */}
        <div className="ml-10 sm:ml-20">
          {timeline}
        </div>
      </div>
    </>
  );
}
