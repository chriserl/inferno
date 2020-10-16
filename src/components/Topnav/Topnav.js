import React from "react";
import { Link } from "react-router-dom";
import "./topnav.scss";
import brandIcon from "../../assets/images/brand/brand.svg";
import jade from "../../assets/images/jade.jpg";

const TopNav = () => {
  return (
    <nav className="topnav">
      <div className="brand-ham">
        <button className="hamburger-button icon-font-button">
          <span className="las la-bars icon-large"></span>
        </button>
        <Link to="/" className="brand">
          <img src={brandIcon} alt="logo" className="brand-image" />
        </Link>
      </div>

      <form className="nav-form">
        <div className="form-control">
          <input
            type="text"
            className="nav-search-input"
            placeholder="search"
          />
          <button type="submit" className="nav-submit nav-icon-button">
            <span className="las la-search"></span>
          </button>
        </div>
      </form>

      <div className="user-actions">
        <ul className="action-items">
          <li className="action-item">
            <span className="las la-video icon-large"></span>
          </li>
          <li className="action-item">
            <span className="las la-bell icon-large"></span>
          </li>
          <li className="action-item">
            <span className="las la-cog icon-large"></span>
          </li>
          <li className="action-item">
            <img src={jade} alt="jade" className="user-image" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
