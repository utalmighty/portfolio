import "../index.css";
import ProfileButton from "./ProfileButton";

function Profile() {
  const profiles = [
    {
      icon: "",
      page: "Github",
      message: "Follow on",
      link: "https://www.github.com/utalmighty",
    },
    {
      icon: "",
      page: "Leetcode",
      message: "",
      link: "https://www.leetcode.com/u/utalmighty",
    },
    {
      icon: "",
      page: "LinkedIn",
      message: "Connect on",
      link: "https://www.linkedin.com/in/utalmighty",
    },
  ];

  const profileItems = profiles.map((profile) => (
      <ProfileButton
        icon={profile.icon}
        name={profile.page}
        link={profile.link}
        message={profile.message}
      />
  ));

  // JSX: Javascript XML
  return (
    <>
      <div className="flex">
        {profileItems}
      </div>
    </>
  );
}

export default Profile;
