import React from "react";
import "./videoslider.scss";
import VideoCard from "../VideoCard/VideoCard";

const VideoSlider = (props) => {
	if (props.videos) {
		return (
			<div className="video-slider">
				<div className="slider-header">
					<div className="slider-title">
						<p className="title">{props.channelName}</p>
					</div>
					<div className="slider-extra">
						<button className="subscripe-button light-button-sm">
							Subscribe
						</button>
						<div className="slider-controls">
							<button className="slider-left icon-font-button">
								<span className="las la-arrow-left"></span>
							</button>
							<button className="slider-right icon-font-button">
								<span className="las la-arrow-right"></span>
							</button>
						</div>
					</div>
				</div>
				<div className="slider-container">
					<ul className="slider-list">
						{props.videos.map((video) => (
							<li className="slider-item" key={video.title}>
								<VideoCard video={video} />
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	} else {
		return <div className="video-slider"></div>;
	}
};

export default VideoSlider;
