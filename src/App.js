import "./App.css";
import { AudioPlayer } from "./components/AudioPlayer";

function App() {
  return (
    <div className="App">
      <h2 className="text">Keeper Companion</h2>
      <div className="audio-container">
        <AudioPlayer
          name={"Creaking door"}
          sound={"/assets/creaking-door.mp3"}
        />
        <AudioPlayer name={"Door"} sound={"/assets/door.mp3"} />
        <AudioPlayer name={"Eerie noise"} sound={"/assets/eerie-noise.mp3"} />
        <AudioPlayer name={"Laugh"} sound={"/assets/laugh.mp3"} />
        <AudioPlayer name={"Scream 1"} sound={"/assets/scream_1.mp3"} />
        <AudioPlayer name={"Scream 2"} sound={"/assets/scream_2.mp3"} />
        <AudioPlayer name={"Strange"} sound={"/assets/strange.mp3"} />
      </div>
    </div>
  );
}

export default App;
