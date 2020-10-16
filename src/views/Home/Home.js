import React from "react";
import SubscriptionSlider from "../../components/SubscriptionSlider/SubscriptionSlider";
import VideoGrid from "../../components/VideosGrid/VideosGrid";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <SubscriptionSlider />
      <VideoGrid />
    </div>
  );
};

export default Home;
