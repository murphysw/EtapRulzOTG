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
}, {
    isId: true,
    priority: 100000.0009,
    key: "row",
    style: {
        backgroundColor: "#fff",
        height: "70dp",
        className: "itemRow",
        hasChild: true
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "image",
    style: {
        height: "42dp",
        width: "68dp",
        left: "5dp",
        top: "3dp",
        touchEnabled: false
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "title",
    style: {
        height: "70dp",
        font: {
            fontSize: "16dp"
        },
        left: "83dp",
        right: "3dp",
        touchEnabled: false
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "date",
    style: {
        height: Ti.UI.SIZE,
        width: "68dp",
        left: "5dp",
        bottom: "3dp",
        color: "#444",
        font: {
            fontSize: "12dp"
        },
        textAlign: "center",
        touchEnabled: false
    }
} ];