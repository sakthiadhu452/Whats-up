import React, { useState } from "react";
import "./OtherVideo.css";

const OtherVideo = () => {
  const [video, setvideo] = useState(false);
  return (
    <div className="OtherVideo-Main">{video ? null : <NoVideoComponent />}</div>
  );
};




const NoVideoComponent = () => {
  return (
    <div className="NoVideoCmp">
      <div className="Name">Sakthi</div>
      <div className="Status">Ringing...</div>
    </div>
  );
};
export default OtherVideo;
