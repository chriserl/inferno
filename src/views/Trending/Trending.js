import React, { useState, useEffect } from "react";
import "./trending.scss";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import Utils from "../../utils";
import ApiCall from "../../api";

const Trending = () => {
	let utilities = new Utils();
	let callApi = new ApiCall();
	useEffect(() => {
		callApi
			.getVideos("mostPopular", "US", "50")
			.then((apiResponse) => apiResponse.json())
			.then((youtubeData) => {
				if (youtubeData.items.length > 1) {
					setvideoItems(() => ({
						gridVideos: youtubeData.items.map((item) =>
							utilities.destructureVideoItem(item)
						),
					}));
				}
			})
			.catch((error) => console.error(error));
	}, []);

	let [videoItems, setvideoItems] = useState(() => ({
		gridVideos: [],
	}));
	return (
		<div className="trending">
			<VideoGrid videos={videoItems.gridVideos} gridTitle="Trending videos" />
		</div>
	);
};

export default Trending;
