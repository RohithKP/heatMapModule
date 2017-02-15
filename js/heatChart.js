var chartsConfig = require('./chartsConfig');
var _ = require('lodash');
var heatChart = {
    initHeatChart: function(chartId, chartData) {
        heatChart.chartContainer = $('#' + chartId);
        if (heatChart.chartContainer.length > 0) {
            var selectEl = $('<select>');
            $.each(chartData, function(key, value) {
                selectEl.append('<option value="' + key + '">' + key + '</option>');
            });
            heatChart.chartContainer.parent().prepend(selectEl);
            // chartsConfig.dataProvider = chartData['timeOfDay'];
            heatChart.chart = window.AmCharts.makeChart(chartId, chartsConfig);
            selectEl.on('change', function() {
                heatChart.chart.dataProvider = chartData[this.value];
                heatChart.chart.validateData();
            })
            //             chart.addListener("rollOverGraphItem", rollOverGraphHandler);
            heatChart.chart.addListener("drawn", function() {
                console.log('chart drawn');
            });
            selectEl.trigger('change');
        }
    }
}

module.exports = heatChart;
