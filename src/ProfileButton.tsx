interface ProfileButtonProps {
    icon: string;
    name: string;
    link: string;
}

export default function ProfileButton( {icon, name , link}: ProfileButtonProps ) {

    return (
        <div> 
            <img src={icon}></img>
            <a href={link} target="blank">{name}</a>
        </div>);

}