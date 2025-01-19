interface Props {
  icon: string;
  name: string;
  about: string;
  yoe: number;
}

export default function SkillButton(skill: Props) {
  const about = skill.about && (
    <h6 className="text-xs font-light text-slate-400">{skill.about}</h6>
  );

  return (
    <>
      <div className="w-1/2 md:w-1/3 m-auto flex justify-center">
        <div className="m-5">
          <a id={skill.name}>
            <div>
              <div className="padding p-2 flex h-full">
                <img src={skill.icon} className="w-10 sm:pr-2"></img>
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold text-sm text-slate-950">
                    {skill.name}
                  </h1>
                  {about}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
