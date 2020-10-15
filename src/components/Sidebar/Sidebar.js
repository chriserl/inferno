import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import profileImage from "../../assets/images/jade.jpg";

const UserLinks = () => {
  return (
    <div className="view-links app-links">
      <ul className="links">
        <li className="link-item">
          <NavLink
            to="/"
            className="view-link"
            activeClassName="active-view-link"
          >
            <span className="las la-home icon-regular link-icon"></span>
            <p className="link-text">Home</p>
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            to="/"
            className="view-link"
            activeClassName="active-view-link"
          >
            <span className="las la-broadcast-tower icon-regular link-icon"></span>
            <p className="link-text">Trending</p>
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            to="/"
            className="view-link"
            activeClassName="active-view-link"
          >
            <span className="las la-folder icon-regular link-icon"></span>
            <p className="link-text">Subscriptions</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
      <div className="channel-image-container">
        <img src={profileImage} alt="channel" className="channel-image" />
      </div>
    </div>
  );
};

const Sidebar = () => {
  let [sidebarState, setSidebarState] = useState(() => "sidebar-opened");

  const toggleSidebar = () => {
    setSidebarState(() =>
      sidebarState === "sidebar-opened" ? "sidebar-closed" : "side-bar-opened"
    );
  };

  return (
    <div className={sidebarState}>
      <button
        onClick={() => toggleSidebar()}
        className="hide-sidebar icon-font-button"
      >
        <span className="las la-angle-double-left"></span>
      </button>
      <div className="profile">
        <img src={profileImage} alt="jade" className="profile-image" />
        <p className="profile-name">Unjaded Jade</p>
      </div>
      <UserLinks />
      <hr />

      <div className="view-links user-links">
        <ul className="links">
          <li className="link-item">
            <NavLink
              to="/"
              className="view-link"
              activeClassName="active-view-link"
            >
              <span className="las la-check-double icon-regular link-icon"></span>
              <p className="link-text">History</p>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              to="/"
              className="view-link"
              activeClassName="active-view-link"
            >
              <span className="las la-bookmark icon-regular link-icon"></span>
              <p className="link-text">Saved</p>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              to="/"
              className="view-link"
              activeClassName="active-view-link"
            >
              <span className="las la-thumbs-up icon-regular link-icon"></span>
              <p className="link-text">Liked</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <Subscriptions />

      <hr />

      <div className="view-links utility-links">
        <ul className="links">
          <li className="link-item">
            <NavLink
              to="/"
              className="view-link"
              activeClassName="active-view-link"
            >
              <span className="las la-cog icon-regular link-icon"></span>
              <p className="link-text">Settings</p>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              to="/"
              className="view-link"
              activeClassName="active-view-link"
            >
              <span className="las la-arrow-circle-left icon-regular link-icon"></span>
              <p className="link-text">Logout</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
