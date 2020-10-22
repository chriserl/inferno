import React from "react";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import "./subscriptions.scss";

const Subscriptions = () => {
	const channels = ["Dave Lee", "Muchelle B", "MKBHD", "Programming With Mosh"];
	return (
		<div className="subscriptions">
			<p className="section-title">Videos from your subscriptions</p>
			<ul className="subscription-items">
				{channels.map((channel) => (
					<li className="subscription-item">
						<VideoSlider channelName={channel} />
					</li>
				))}
			</ul>
		</div>
	);
};
export default Subscriptions;
