import { useState } from "react";
import Institute from "./Institute";

export interface TimelineProp {
  icon: string;
  name: string;
  about: string[];
  date: string;
  position: string;
  link: string;
}

export default function Tab() {

  const educationTimelineData : TimelineProp[] = [
      {
        icon: "edu1 icon",
        name: "edu1 name",
        about: ["point1 edu1 message", "point2 edu1 message"],
        date: "edu1 date",
        position: "edu1 pos",
        link: "edu1 link"
      },
      {
        icon: "edu2 icon",
        name: "edu2 name",
        about: ["point1 edu2 message", "point2 edu2 message"],
        date: "edu2 date",
        position: "edu2 pos",
        link: "edu2 link"
      }];

    const experienceTimelineData : TimelineProp[] = [
      {
        icon: "exp1 icon",
        name: "exp1 name",
        about: ["point1 exp1 message", "point2 exp1 message"],
        date: "exp1 date",
        position: "exp1 pos",
        link: "exp1 link"
      },
      {
        icon: "exp2 icon",
        name: "exp2 name",
        about: ["point1 exp2 message", "point2 exp2 message"],
        date: "exp2 date",
        position: "exp2 pos",
        link: "exp2 link"
      }];

      const educationTimeline = educationTimelineData.map((item)=> (
        <Institute 
          key={item.name}
          icon={item.icon}
          name={item.name}
          about={item.about}
          date={item.date}
          position={item.position}
          link={item.link}
        />
      ));

      const experienceTimeline = experienceTimelineData.map((item)=> (
        <Institute 
          key={item.name}
          icon={item.icon}
          name={item.name}
          about={item.about}
          date={item.date}
          position={item.position}
          link={item.link}
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
        <div>
          {timeline}
        </div>
      </div>
    </>
  );
}
