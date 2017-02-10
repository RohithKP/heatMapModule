var chartsConfig = {
    "type": "stock",
    "theme": "light",
    "dataSets": [{
        "title": "Time of day",
        "id": "timeOfDay",
        "fieldMappings": [{
            "fromField": "spots",
            "toField": "time"
        }],
        "dataProvider": "",
        "categoryField": "date"
    }, {
        "title": "Day of week",
        "id": "dayOfWeek",
        "fieldMappings": [{
            "fromField": "time",
            "toField": "time"
        }, {
            "fromField": "spots",
            "toField": "spots"
        }],
        "dataProvider": ""
    }],

    "panels": [{
        "title": "Volume",
        "percentHeight": 30,
        "stockGraphs": [{
            "valueField": "spots",
            "type": "column",
            "showBalloon": false,
            "fillAlphas": 1
        }]
    }],
    "dataSetSelector": {
        "position": "left"
    },

    "export": {
        "enabled": true
    }
}

module.exports = chartsConfig;
