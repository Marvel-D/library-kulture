import Navbar from "./App/Navbar";
import CenterSect from "./App/CenterSect"

function App() {
  return (
    <div className="App">
      <Navbar appName={"Library"}></Navbar>

      <CenterSect></CenterSect>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

    </div>
  );
}

export default App;
