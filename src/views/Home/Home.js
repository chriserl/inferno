import React, { useState, useEffect } from "react";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import "./home.scss";
import Utils from "../../utils";
import ApiCall from "../../api";

const Home = () => {
	let utilities = new Utils();
	let callApi = new ApiCall();
	useEffect(() => {
		callApi
			.getVideos("mostPopular", "US", "50")
			.then((apiResponse) => apiResponse.json())
			.then((youtubeData) => {
				setvideoItems(() => ({
					slidingVideos: youtubeData.items
						.slice(0, 10)
						.map((item) => utilities.destructureVideoItem(item)),
					recommendedVideos: youtubeData.items
						.slice(10)
						.map((item) => utilities.destructureVideoItem(item)),
				}));
			});
	}, []);

	let [videoItems, setvideoItems] = useState(() => ({
		slidingVideos: [],
		recommendedVideos: [],
	}));

	return (
		<div className="home">
			<div className="subscriptions-slider">
				<VideoSlider
					videos={videoItems.slidingVideos}
					channelName="Subscriptions"
				/>
			</div>
			<VideoGrid
				videos={videoItems.recommendedVideos}
				gridTitle="Recommended for you"
			/>
		</div>
	);
};

export default Home;
