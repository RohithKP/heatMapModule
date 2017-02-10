var heatmap = require('./heatmap');
var table = require('./table');
var data =  {"timeOfDay" : [ {
            "time": "7:00:00 AM",
            "spots": 5
          }, {
            "time": "7:15:00 AM",
            "spots": 10
          }, {
            "time": "7:30:00 AM",
            "spots": 15
          }, {
            "time": "7:45:00 AM",
            "spots": 25
          }, {
            "time": "8:00:00 AM",
            "spots": 50
          }, {
            "time": "8:15:00 AM",
            "spots": 120
          }, {
            "time": "8:30:00 AM",
            "spots": 180
          }, {
            "time": "8:45:00 AM",
            "spots": 200
          }, {
            "time": "9:00:00 AM",
            "spots": 220
          }, {
            "time": "9:15:00 AM",
            "spots": 250
          }, {
            "time": "9:30:00 AM",
            "spots": 280
          }, {
            "time": "9:45:00 AM",
            "spots": 300
          }, {
            "time": "10:15:00 AM",
            "spots": 310
          }, {
            "time": "10:30:00 AM",
            "spots": 310
          }, {
            "time": "10:45:00 AM",
            "spots": 310
          }, {
            "time": "11:00:00 AM",
            "spots": 350
          }, {
            "time": "11:15:00 AM",
            "spots": 380
          }, {
            "time": "11:30:00 AM",
            "spots": 400
          }, {
            "time": "11:45:00 AM",
            "spots": 400
          }, {
            "time": "12:00:00 PM",
            "spots": 400
          }, {
            "time": "12:15:00 PM",
            "spots": 420
          }, {
            "time": "12:30:00 PM",
            "spots": 450
          }, {
            "time": "12:45:00 PM",
            "spots": 460
          }, {
            "time": "1:00:00 PM",
            "spots": 460
          }, {
            "time": "1:15:00 PM",
            "spots": 420
          }, {
            "time": "1:30:00 PM",
            "spots": 420
          }, {
            "time": "1:45:00 PM",
            "spots": 370
          }, {
            "time": "2:00:00 PM",
            "spots": 345
          }, {
            "time": "2:15:00 PM",
            "spots": 250
          }, {
            "time": "2:30:00 PM",
            "spots": 200
          }, {
            "time": "2:45:00 PM",
            "spots": 110
          }, {
            "time": "3:00:00 PM",
            "spots": 110
          }, {
            "time": "3:15:00 PM",
            "spots": 80
          }, {
            "time": "3:30:00 PM",
            "spots": 65
          }, {
            "time": "3:45:00 PM",
            "spots": 50
          }, {
            "time": "4:00:00 PM",
            "spots": 50
          }, {
            "time": "4:15:00 PM",
            "spots": 50
          }, {
            "time": "4:30:00 PM",
            "spots": 35
          }, {
            "time": "4:45:00 PM",
            "spots": 30
          }, {
            "time": "5:00:00 PM",
            "spots": 20
          }, {
            "time": "5:15:00 PM",
            "spots": 15
          }, {
            "time": "5:30:00 PM",
            "spots": 10
          }, {
            "time": "5:45:00 PM",
            "spots": 5
          }, {
            "time": "6:00:00 PM",
            "spots": 2
          } ]}
heatmap.initTraversalTimeline(data);
