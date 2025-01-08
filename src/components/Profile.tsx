import "../index.css";
import ProfileButton from "./ProfileButton";
import github from "../assets/github-icon.svg"
import leetcode from "../assets/leetcode-icon.svg"
import linkedin from "../assets/linkedin-icon.svg"

function Profile() {
  const profiles = [
    {
      icon: github,
      page: "Github",
      message: "Follow on",
      link: "https://www.github.com/utalmighty",
    },
    {
      icon: leetcode,
      page: "Leetcode",
      message: "",
      link: "https://www.leetcode.com/u/utalmighty",
    },
    {
      icon: linkedin,
      page: "LinkedIn",
      message: "Connect on",
      link: "https://www.linkedin.com/in/utalmighty",
    },
  ];

  const profileItems = profiles.map((profile) => (
      <ProfileButton
        key={profile.page}
        icon={profile.icon}
        name={profile.page}
        link={profile.link}
        message={profile.message}
      />
  ));

  // JSX: Javascript XML
  return (
    <>
      <div className="flex justify-evenly mt-10 mb-10">
        {profileItems}
      </div>
    </>
  );
}

export default Profile;
