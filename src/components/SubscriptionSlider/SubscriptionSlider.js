import React from "react";
import "./subscriptionslider.scss";
import jade from "../../assets/images/jade.jpg";

const SubscriptionSlider = () => {
  return (
    <div className="subscription-slider">
      <p className="slider-title">Subscriptions</p>

      <div className="slider-container">
        <ul className="slider-list">
          <li className="slider-item">
            <img src={jade} alt="jade" className="slider-image" />
            <div className="slider-info">
              <div className="main-info">
                <p className="video-title">New Benz CLA</p>
                <p className="video-channel">TechGinie</p>
              </div>
              <p className="views">1.2k views</p>
            </div>
          </li>
          <li className="slider-item">
            <img src={jade} alt="jade" className="slider-image" />
            <div className="slider-info">
              <div className="main-info">
                <p className="video-title">New Benz CLA</p>
                <p className="video-channel">TechGinie</p>
              </div>
              <p className="views">1.2k views</p>
            </div>
          </li>
          <li className="slider-item">
            <img src={jade} alt="jade" className="slider-image" />
            <div className="slider-info">
              <div className="main-info">
                <p className="video-title">New Benz CLA</p>
                <p className="video-channel">TechGinie</p>
              </div>
              <p className="views">1.2k views</p>
            </div>
          </li>
          <li className="slider-item">
            <img src={jade} alt="jade" className="slider-image" />
            <div className="slider-info">
              <div className="main-info">
                <p className="video-title">New Benz CLA</p>
                <p className="video-channel">TechGinie</p>
              </div>
              <p className="views">1.2k views</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionSlider;
