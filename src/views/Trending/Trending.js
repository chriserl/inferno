import React from "react";
import "./trending.scss";
import VideosGrid from "../../components/VideosGrid/VideosGrid";

const Trending = () => {
	return (
		<div className="trending">
			<p className="section-title">Trending</p>
			<VideosGrid />
		</div>
	);
};

export default Trending;
