export default function ApiCall() {
	let videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&`;
	let searchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&";

	this.getVideos = function (chart, regionCode, maxResults) {
		return fetch(
			`${videosUrl}chart=${chart}&regionCode=${regionCode}&maxResults=${maxResults}&key=AIzaSyDRvJvoDJMfNDdsyDAsYezyHTZqqlwku6A`
		);
	};

	this.searchVideos = function (chart, regionCode, maxResults, queryString) {
		return fetch(
			`${searchUrl}chart=${chart}&regionCode=${regionCode}&maxResults=${maxResults}&q=${queryString}&key=AIzaSyDRvJvoDJMfNDdsyDAsYezyHTZqqlwku6A`
		);
	};

	this.fetchVideo = function (videoId) {
		return fetch(
			`${videosUrl}&id=${videoId}&key=AIzaSyDRvJvoDJMfNDdsyDAsYezyHTZqqlwku6A`
		);
	};
}
