var chartsConfig = {
    "type": "serial",
    "theme": "light",
    "marginRight": 70,
    "dataProvider": "",
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left",
        "title": "Visitors from country"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[category]]: [[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "spots"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "time",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45
    },
    "export": {
        "enabled": true
    }

}

module.exports = chartsConfig;
