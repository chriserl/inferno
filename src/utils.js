export default function Utils() {
	let formatNum = (numInput) => {
		return new Intl.NumberFormat().format(Math.round(numInput * 10) / 10);
	};

	let formatString = (rawString, limit) => {
		return `${rawString.slice(0, limit)}...`;
	};

	this.statisticCount = function (rawNumber) {
		if (rawNumber > 999) {
			return rawNumber >= 1000000
				? `${formatNum(rawNumber / 1000000)}M`
				: `${formatNum(rawNumber / 1000)}K`;
		} else {
			return rawNumber;
		}
	};

	this.formatVideoTitle = function (longString) {
		return longString.length > 24 ? formatString(longString, 24) : longString;
	};

	this.formatChannelName = function (longString) {
		return longString.length > 26 ? formatString(longString, 26) : longString;
	};

	this.formatDate = function (date) {
		return date.slice(0, 10);
	};

	this.destructureVideoItem = (videoItem) => {
		return {
			channelName: videoItem.snippet.channelTitle,
			thumbnail: videoItem.snippet.thumbnails.maxres
				? videoItem.snippet.thumbnails.maxres.url
				: videoItem.snippet.thumbnails.high.url,
			title: videoItem.snippet.title,
			date: videoItem.snippet.publishedAt,
			viewCount: videoItem.statistics.viewCount,
		};
	};

	this.destructureSearchItem = (videoItem) => {
		return {
			channelName: videoItem.snippet.channelTitle,
			thumbnail: videoItem.snippet.thumbnails.maxres
				? videoItem.snippet.thumbnails.maxres.url
				: videoItem.snippet.thumbnails.high.url,
			title: videoItem.snippet.title,
		};
	};
}
