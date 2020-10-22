import React, { useState, useEffect } from "react";
import "./search.scss";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import Utils from "../../utils";
import ApiCall from "../../api";

const Search = (props) => {
	let utilities = new Utils();
	let callApi = new ApiCall();
	let videos = [];
	useEffect(() => {
		callApi
			.searchVideos("mostPopular", "US", "10", props.match.params.searchParam)
			.then((apiResponse) => apiResponse.json())
			.then((youtubeData) => {
				youtubeData.items.forEach((dataItem) => {
					callApi
						.fetchVideo(dataItem.id.videoId)
						.then((dataResponse) => dataResponse.json())
						.then((videoItem) => {
							videos.push(utilities.destructureVideoItem(videoItem.items[0]));
						});
				});
				setvideoItems(() => ({
					gridVideos: videos,
				}));
			})
			.catch((error) => console.log(error));
	}, []);

	let [videoItems, setvideoItems] = useState(() => ({
		gridVideos: [],
	}));
	return (
		<div className="search">
			<VideoGrid
				videos={videoItems.gridVideos}
				gridTitle={`Search results for ${props.match.params.searchParam}`}
			/>
		</div>
	);
};

export default Search;
