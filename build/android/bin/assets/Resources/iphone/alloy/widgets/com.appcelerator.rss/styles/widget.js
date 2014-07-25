function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.rss/" + s : s.substring(0, index) + "/com.appcelerator.rss/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "transparent"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false"
    }
} ];