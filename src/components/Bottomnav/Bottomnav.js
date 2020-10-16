import React from "react";
import "./bottomnav.scss";
import jade from "../../assets/images/jade.jpg";

const Bottomnav = () => {
  return (
    <nav className="bottom-nav">
      <ul className="nav-items">
        <li className="nav-item">
          <button className="nav-button icon-font-button">
            <span className="las la-video icon-regular"></span>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button icon-font-button">
            <span className="las la-bell icon-regular"></span>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button icon-font-button">
            <span className="las la-cog icon-regular"></span>
          </button>
        </li>
        <li className="nav-item profile-image">
          <img src={jade} alt="jade" className="user-image" />
        </li>
      </ul>
    </nav>
  );
};

export default Bottomnav;
