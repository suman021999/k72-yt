import React from "react";
import sampleVideo from "../../../public/video.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src={sampleVideo}
      ></video>
    </div>
  );
};

export default Video;

