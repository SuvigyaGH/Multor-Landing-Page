"use client";

import React, { useState } from "react";
import Play from "../../assets/play.png";
import Video from "../../assets/gif.mp4";
import Image from "next/image";
import "./Visitors.scss";

const VisitorsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Additional logic to start playing the video or show the GIF
    const video = document.getElementById("videoPlayer");
    video.play();
  };

  return (
    <div className="visitorsSection">
      <div className="content">
        <h1 className="mainHeading">
          Show visitors what they are signing up for
        </h1>
        <h2 className="subHeading">
          Include a video or photo from one of your sessions to help people
          understand your service (or just to hype ‘em up).
        </h2>
        {isPlaying ? (
          <div className="videoWrapper">
            <video id="videoPlayer" src={Video} controls autoPlay />
          </div>
        ) : (
          <div className="videoWrapper">
            {/* <Image className="img" src={Thumbnail} alt="Video Thumbnail" /> */}
            <video id="videoPlayer" src={Video} controls autoPlay />
            <button className="playButton" onClick={handlePlay}>
              <Image src={Play} alt="play button"></Image>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisitorsSection;
