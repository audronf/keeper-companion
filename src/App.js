import "./App.css";
import { AudioPlayer } from "./components/AudioPlayer";

function App() {
  return (
    <div className="App">
      <p>Keeper Companion</p>
      <div>
        <AudioPlayer name={"Test Audio"} sound={"/assets/test.wav"} />
      </div>
    </div>
  );
}

export default App;
