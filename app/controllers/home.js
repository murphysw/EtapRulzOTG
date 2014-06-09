var args = arguments[0] || {};
var isIpad = OS_IOS && Alloy.isTablet;
var rss = require('rss');

// Refresh table data from remote RSS feed
function refreshRss(url) {
	rss.loadRssFeed(url, {
		success: function(data) {
			var item = data[0];
			$.date.text = item.date;
			$.title.text = item.title;
			$.description.text = item.description;
		}
	});
}

// do initial load of RSS
refreshRss("http://www.gnpcb.org/esv/share/rss2.0/daily/");





