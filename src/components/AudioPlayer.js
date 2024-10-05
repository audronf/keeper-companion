import H5AudioPlayer from "react-h5-audio-player";
import "./AudioPlayer.css";
import "react-h5-audio-player/lib/styles.css";

export const AudioPlayer = ({ name, sound }) => {
  return (
    <div className="audio-player">
      <h4 className="audio-name text">{name}</h4>
      <H5AudioPlayer autoPlay={false} src={sound} />
    </div>
  );
};
