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
        <AudioPlayer
          name={"Wooden door creaking"}
          sound={"/assets/wooden-door-creaking.mp3"}
        />
        <AudioPlayer name={"Knock knock knock"} sound={"/assets/knock.mp3"} />
        <AudioPlayer name={"Laugh"} sound={"/assets/laugh.mp3"} />
        <AudioPlayer name={"Scream"} sound={"/assets/scream.mp3"} />
        <AudioPlayer name={"Strange"} sound={"/assets/strange.mp3"} />
        <AudioPlayer name={"Pistol"} sound={"/assets/pistol.mp3"} />
        <AudioPlayer name={"Footsteps"} sound={"/assets/footsteps.mp3"} />
      </div>
    </div>
  );
}

export default App;
