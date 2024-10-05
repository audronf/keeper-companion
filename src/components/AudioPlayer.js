import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export const AudioPlayer = ({ name, sound }) => {
  return (
    <div className="audio-player">
      <H5AudioPlayer autoPlay={false} src={sound} />;
    </div>
  );
};
