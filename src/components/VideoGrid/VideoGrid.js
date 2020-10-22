import React from "react";
import "./videogrid.scss";
import VideoCard from "../VideoCard/VideoCard";

const VideoGrid = (props) => {
	if (props.videos) {
		return (
			<div className="video-grid">
				<p className="grid-title">{props.gridTitle}</p>
				<ul className="grid-container">
					{props.videos.map((video) => (
						<li className="grid-item" key={video.title}>
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
