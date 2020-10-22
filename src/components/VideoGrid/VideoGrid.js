import React from "react";
import "./videogrid.scss";
import VideoCard from "../VideoCard/VideoCard";
import vid1 from "../../assets/images/videos/vid1.png";
import vid2 from "../../assets/images/videos/vid2.png";
import vid3 from "../../assets/images/videos/vid3.png";
import vid4 from "../../assets/images/videos/vid4.png";
import vid5 from "../../assets/images/videos/vid5.png";
import vid6 from "../../assets/images/videos/vid6.png";
import vid7 from "../../assets/images/videos/vid7.png";

const VideoGrid = (props) => {
	const videos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7];

	if (props.videos) {
		return (
			<div className="video-grid">
				<p className="grid-title">{props.gridTitle}</p>
				<ul className="grid-container">
					{props.videos.map((video) => (
						<li className="grid-item" key={video}>
							<VideoCard video={video} />
						</li>
					))}
				</ul>
			</div>
		);
	} else {
		return (
			<div className="video-grid">
				<VideoCard />
			</div>
		);
	}
};

export default VideoGrid;
