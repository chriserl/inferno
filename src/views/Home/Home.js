import React from "react";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import VideoGrid from "../../components/VideosGrid/VideosGrid";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <VideoSlider />
      <VideoGrid />
    </div>
  );
};

export default Home;
