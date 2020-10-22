import React from "react";
import "./videocard.scss";
import Utils from "../../utils";

const VideoCard = (props) => {
	let utilities = new Utils();
	if (props.video) {
		return (
			<div className="video-card">
				<a href="/">
					<img
						src={props.video.thumbnail}
						alt="jade"
						className="video-thumbnail"
					/>
				</a>
				<div className="video-info">
					<div className="main-info">
						<a href="/" className="video-title">
							{utilities.formatVideoTitle(props.video.title)}
						</a>
						<a href="/" className="video-channel">
							{utilities.formatChannelName(props.video.channelName)}
						</a>
						<div className="views-likes">
							<div className="views">
								<span className="las la-eye"></span>
								<p className="views-count">
									{utilities.statisticCount(props.video.viewCount)}
								</p>
							</div>
							<div className="likes">
								<p className="video-age">{props.video.date.slice(0, 10)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="video-card">
				<p className="ph">Loading...</p>
			</div>
		);
	}
};

export default VideoCard;
