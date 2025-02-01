import { useState } from "react";

interface TimelineProp {
  icon: string;
  name: string;
  about: string;
  date: string;
}

export default function Tab() {

  const educationTimeline : TimelineProp[] = [
      {
        icon: "edu1 icon",
        name: "edu1 name",
        about: "edu1 message",
        date: "edu1 date",
      },
      {
        icon: "edu2 icon",
        name: "edu2 name",
        about: "edu2 message",
        date: "edu2 date",
      }];

    const experienceTimeline : TimelineProp[] = [
      {
        icon: "exp1 icon",
        name: "exp1 name",
        about: "exp1 message",
        date: "exp1 date",
      },
      {
        icon: "exp2 icon",
        name: "exp2 name",
        about: "exp2 message",
        date: "exp2 date",
      }];

      const [state, setState] = useState("Experience");
      const [educationSelected, setEducationSelected] = useState(state == "Education");
      const [experienceSelected, setExperienceSelected] = useState(state == "Experience");

      function handleClick(newState:string) {
        if(state != newState) {
          if (state == "Education") {
            setEducationSelected(false);
            setExperienceSelected(true);
          }
          if (state == "Experience") {
            setExperienceSelected(false);
            setEducationSelected(true);
          }
          setState(newState);
        }
      }

      


  return (
    <>
      <div className="flex w-full m-3 p-1 border border-black rounded-lg bg-slate-50">
        <div className={`w-1/2 text-center rounded-md ${experienceSelected ? "bg-slate-400" : "hover:bg-slate-200"}`} onClick={()=> handleClick("Experience")}>{experienceSelected}Experience</div>
        <div className={`w-1/2 text-center rounded-md ${educationSelected ? "bg-slate-400" : "hover:bg-slate-200"}`} onClick={()=> handleClick("Education")}>{educationSelected}Education</div>
      </div>
      <div className="w-full m-3 p-1 border border-gray-300 rounded-lg bg-slate-50"> {/* 👈🏼 Make this scrollable */}
        <div>{state}</div>
      </div>
    </>
  );
}
