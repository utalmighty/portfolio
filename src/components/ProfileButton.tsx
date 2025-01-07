interface Props {
  icon: string;
  name: string;
  message: string;
  link: string;
}

export default function ProfileButton({
  icon,
  name,
  message,
  link,
}: Props) {
  return (
    <div>
      <img src={icon}></img>
      <h6>{message}</h6>
      <a href={link} target="blank">
        {name}
      </a>
    </div>
  );
}
