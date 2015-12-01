var api = require('apicall');

var newsfeed = {
    initialize: function() {
        $.refreshnews.initialize({
            arguments: {},
            controller: 'newsfeed',

            headerPullView : {
                arrow : {
                    bottom: 10,
                    height: 46,
                    left: 35,
                    width: 11
                },
                border : {
                    backgroundColor: '#FF7A00',
                },
                lastUpdate : {
                    color: "#FF7A00",
                },
                status : {
                    color: '#FF7A00',
                },
            }
        });
    }
};

var tasks = {
    initialize: function() {
        $.refreshtask.initialize({
            arguments: {},
            controller: 'todo',

            headerPullView : {
                arrow : {
                    bottom: 10,
                    height: 46,
                    left: 35,
                    width: 11
                },
                border : {
                    backgroundColor: '#FF7A00',
                },
                lastUpdate : {
                    color: "#FF7A00",
                },
                status : {
                    color: '#FF7A00',
                },
            }
        });
    }
};

newsfeed.initialize();
tasks.initialize();

$.tabGroup.open();