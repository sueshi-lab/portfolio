import AboutMe from "./Components/AboutMe";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import SeniorProject from "./Components/SeniorProject";

function App() {
  return (
    <div className='container-fluid bg-zinc-50 h-full'>
      <Navbar />
      <Landing />
      <AboutMe />
      <SeniorProject />
    </div>
  );
}

export default App;