export default function ApiCall() {
	let videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&`;

	this.getVideos = function (chart, regionCode, maxResults) {
		return fetch(
			`${videosUrl}chart=${chart}&regionCode=${regionCode}&maxResults=${maxResults}&key=AIzaSyDRvJvoDJMfNDdsyDAsYezyHTZqqlwku6A`
		);
	};
}
