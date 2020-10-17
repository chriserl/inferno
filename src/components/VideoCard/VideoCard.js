import React from "react";
import "./videocard.scss";

const VideoCard = (props) => {
  return (
    <div className="video-card">
      <img src={props.thumbnail} alt="jade" className="video-thumbnail" />
      <div className="video-info">
        <div className="main-info">
          <p className="video-title">Dua Lipa</p>
          <p className="video-channel">Muchelle B</p>
          <div className="views-likes">
            <div className="views">
              <span className="las la-eye"></span>
              <p className="views-count">1.4k</p>
            </div>
            <div className="likes">
              <span className="las la-thumbs-up"></span>
              <p className="likes-count">104k</p>
            </div>
          </div>
        </div>
        <p className="video-age">3 months ago</p>
      </div>
    </div>
  );
};

export default VideoCard;
