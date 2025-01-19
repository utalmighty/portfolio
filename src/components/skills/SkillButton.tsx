interface Props {
  icon: string;
  name: string;
  about: string;
  yoe: number;
}

export default function SkillButton(skill: Props) {
  const about = skill.about && <h6 className="text-xs font-light text-slate-400">{skill.about}</h6>
  
  return (
    <>
      <div className="ml-5 mr-5 mt-10">
        <a id={skill.name}>
          <div>
            <div className="padding p-2 flex h-full justify-evenly">
              <img src={skill.icon} className="w-10 sm:pr-2"></img>
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-sm text-slate-950">{skill.name}</h1>
                {about}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
