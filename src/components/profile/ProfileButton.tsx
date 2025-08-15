interface Props {
  icon: string;
  name: string;
  message: string;
  link: string;
}

export default function ProfileButton({ icon, name, message, link }: Props) {

  const messageContent = message && <span className="text-gray-400 text-sm">{message}</span>

  return (
    <div className="ml-5 mr-5 mt-10 hover:scale-105 transition duration-700">
      <a id={name} href={link} target="blank">
        <div className="w-56 h-16 border-2 border-black rounded-lg hover:shadow-lg sm:w-40 duration-700">
          <div className="padding p-2 flex h-full justify-evenly">
            <img src={icon} className="m-1"></img>
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
