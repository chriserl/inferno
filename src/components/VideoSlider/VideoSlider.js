import React from "react";
import "./videoslider.scss";
import vid1 from "../../assets/images/videos/vid1.png";
import vid2 from "../../assets/images/videos/vid2.png";
import vid3 from "../../assets/images/videos/vid3.png";
import vid4 from "../../assets/images/videos/vid4.png";
import vid5 from "../../assets/images/videos/vid5.png";
import vid6 from "../../assets/images/videos/vid6.png";
import vid7 from "../../assets/images/videos/vid7.png";
import VideoCard from "../VideoCard/VideoCard";

const VideoSlider = () => {
	let thumbnails = [vid1, vid2, vid3, vid4, vid5, vid6, vid7];
	return (
		<div className="video-slider">
			<div className="slider-header">
				<div className="slider-title">
					<img src={vid2} alt="channel" className="channel-image" />
					<p className="title">Dave Lee</p>
				</div>
				<div className="slider-extra">
					<button className="subscripe-button light-button">Subscribe</button>
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
					{thumbnails.map((thumbnail) => (
						<li className="slider-item">
							<VideoCard thumbnail={thumbnail} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default VideoSlider;
