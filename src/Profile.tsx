import './index.css';

function Profile() {

    const profiles = [
        { page: "Github", link: "https://www.github.com/utalmighty"},
        { page: "Leetcode", link: "https://www.leetcode.com/u/utalmighty"},
    ];

    const listItems = profiles.map(profile=>
        <li key={profile.page}>
            <a href={profile.link} target='blank'>{profile.page}</a>
        </li>
    );

    // JSX: Javascript XML
    return (<>
        <h1 className="align-middle">Utkarsh</h1>
        <ul>{listItems}</ul>
    </>);
}

export default Profile;