import "./App.css";
import { AudioPlayer } from "./components/AudioPlayer";

function App() {
  return (
    <div className="App">
      <h2 className="text">Keeper Companion</h2>
      <div className="audio-container">
        <AudioPlayer name={"Test Audio 1"} sound={"/assets/test.wav"} />
        <AudioPlayer name={"Test Audio 2"} sound={"/assets/test.wav"} />
        <AudioPlayer name={"Test Audio 3"} sound={"/assets/test.wav"} />
        <AudioPlayer name={"Test Audio 4"} sound={"/assets/test.wav"} />
        <AudioPlayer name={"Test Audio 5"} sound={"/assets/test.wav"} />
        <AudioPlayer name={"Test Audio 6"} sound={"/assets/test.wav"} />
      </div>
    </div>
  );
}

export default App;
