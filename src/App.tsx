import Ribbon from "./components/banner/Ribbon";
import Career from "./components/career/Career";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Skills />
      <Career />
      <Project />
      <Ribbon />
    </div>
  );
}

export default App;
