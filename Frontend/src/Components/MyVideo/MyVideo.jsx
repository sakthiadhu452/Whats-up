import React, { useRef, useEffect } from 'react';
import './MyVideo.css';

const MyVideo = ({ videoCall }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoCall) {
      // Accessing media devices
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing media devices:', error);
        });
    }
  }, [videoCall]); // useEffect dependency on videoCall prop

  return (
    <div className='myVideo-Main'>
      {videoCall && <video ref={videoRef} autoPlay className='myVideo-Sub' />}
    </div>
  );
};

export default MyVideo;
