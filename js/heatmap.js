var chartsConfig = require('./chartsConfig');
var _ = require('lodash');
var heatmap = {
    initTraversalTimeline: function(chartData) {
        if ($('#chartdiv').length > 0) {
            $.each(chartData,function(key,value){
              _.filter(chartsConfig.dataSets,{id:key})[0].dataProvider = value;
            });
            var chart = window.AmCharts.makeChart('chartdiv', chartsConfig);
//             chart.addListener("rollOverGraphItem", rollOverGraphHandler);
            chart.addListener("drawn", function() {
							console.log('chart drawn');
            });
        }
    }
}

module.exports = heatmap;
