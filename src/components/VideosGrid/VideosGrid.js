import React from "react";
import "./videogrid.scss";
import vid1 from "../../assets/images/videos/vid1.png";
import vid2 from "../../assets/images/videos/vid2.png";
import vid3 from "../../assets/images/videos/vid3.png";
import vid4 from "../../assets/images/videos/vid4.png";
import vid5 from "../../assets/images/videos/vid5.png";
import vid6 from "../../assets/images/videos/vid6.png";
import vid7 from "../../assets/images/videos/vid7.png";

const VideoGrid = () => {
  return (
    <div className="video-grid">
      <p className="grid-title">Recommended</p>
      <ul className="grid-container">
        <li className="grid-item">
          <img src={vid1} alt="jade" className="slider-image" />
          <div className="slider-info">
            <div className="main-info">
              <p className="video-title">Primary Income Housing</p>
              <p className="video-channel">TechGinie</p>
            </div>
            <p className="views">1.2k views</p>
          </div>
        </li>
        <li className="grid-item">
          <img src={vid2} alt="jade" className="slider-image" />
          <div className="slider-info">
            <div className="main-info">
              <p className="video-title">Primary Income Housing</p>
              <p className="video-channel">TechGinie</p>
            </div>
            <p className="views">1.2k views</p>
          </div>
        </li>
        <li className="grid-item">
          <img src={vid3} alt="jade" className="slider-image" />
          <div className="slider-info">
            <div className="main-info">
              <p className="video-title">Primary Income Housing</p>
              <p className="video-channel">TechGinie</p>
            </div>
            <p className="views">1.2k views</p>
          </div>
        </li>
        <li className="grid-item">
          <img src={vid4} alt="jade" className="slider-image" />
          <div className="slider-info">
            <div className="main-info">
              <p className="video-title">Primary Income Housing</p>
              <p className="video-channel">TechGinie</p>
            </div>
            <p className="views">1.2k views</p>
          </div>
        </li>
        <li className="grid-item">
          <img src={vid5} alt="jade" className="slider-image" />
          <div className="slider-info">
            <div className="main-info">
              <p className="video-title">Primary Income Housing</p>
              <p className="video-channel">TechGinie</p>
            </div>
            <p className="views">1.2k views</p>
          </div>
        </li>
        <li className="grid-item">
          <img src={vid6} alt="jade" className="slider-image" />
          <div className="slider-info">
            <div className="main-info">
              <p className="video-title">Primary Income Housing</p>
              <p className="video-channel">TechGinie</p>
            </div>
            <p className="views">1.2k views</p>
          </div>
        </li>
        <li className="grid-item">
          <img src={vid7} alt="jade" className="slider-image" />
          <div className="slider-info">
            <div className="main-info">
              <p className="video-title">Primary Income Housing</p>
              <p className="video-channel">TechGinie</p>
            </div>
            <p className="views">1.2k views</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VideoGrid;
