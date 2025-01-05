import './index.css';
import ProfileButton from './ProfileButton';

function Profile() {

    const profiles = [
        { icon: "", page: "Github", link: "https://www.github.com/utalmighty"},
        { icon: "", page: "Leetcode", link: "https://www.leetcode.com/u/utalmighty"},
        { icon: "", page: "LinkedIn", link: "https://www.linkedin.com/in/utalmighty"},

    ];

    const listItems = profiles.map(profile=>
        <li key={profile.page}>
            <ProfileButton icon={profile.icon} name={profile.page} link={profile.link} />
        </li>
    );

    // JSX: Javascript XML
    return (<>
        <ul>{listItems}</ul>
    </>);
}

export default Profile;