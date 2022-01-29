import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className='container-fluid bg-zinc-50 h-full'>
      <Navbar />
      <Landing />
      {/* <div className="container-fluid">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div> */}
    </div>
  );
}

export default App;