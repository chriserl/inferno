import React from "react";
import "./sidebar.scss";
import profileImage from "../../assets/images/jade.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="hide-sidebar icon-font-button">
        <span className="las la-angle-double-left"></span>
      </button>
      <div className="profile">
        <img src={profileImage} alt="jade" className="profile-image" />
        <p className="profile-name">Unjaded Jade</p>
      </div>
      <div className="view-links">
        <ul className="links">
          <li className="link-item">
            <a href="/" className="view-link">
              <span className="las la-home"></span>
              Home
            </a>
          </li>
          <li className="link-item">
            <a href="/" className="view-link">
              <span className="las la-home"></span>
              Home
            </a>
          </li>
          <li className="link-item">
            <a href="/" className="view-link">
              <span className="las la-home"></span>
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
