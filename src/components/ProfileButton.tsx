interface Props {
  icon: string;
  name: string;
  message: string;
  link: string;
}

export default function ProfileButton({ icon, name, message, link }: Props) {

  const messageContent = message && <h6 className="text-sm font-semibold text-slate-400">{message}</h6>

  return (
    <div>
      <a id={name} href={link} target="blank">
        <div className="w-40 h-16 border-2 border-black rounded-lg hover:shadow-lg">
          <div className="padding p-2 flex h-full justify-evenly">
            <img src={icon} className="w-10 pr-2"></img>
            <div className="flex flex-col justify-center">
              {messageContent}
              <h1 className="font-bold text-md text-slate-950">{name}</h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
