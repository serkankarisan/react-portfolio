import "./App.css";
import { BallCanvas } from "./components/canvas";
import { javascript } from "./assets/index";

function App() {
  return (
    <>
      <div>
        <BallCanvas icon={javascript}/>
      </div>
    </>
  );
}

export default App;
