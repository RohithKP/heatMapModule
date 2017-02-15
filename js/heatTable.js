function heatTable(state){
	var tableData = [
		{time:"7:00:00 AM","spots": 5},
		{time:"7:15:00 AM", "spots":10},
		{time:"7:30:00 AM", "spots":15},
		{time:"7:45:00 AM", "spots":25},
		{time:"8:00:00 AM", "spots":50},
		{time:"8:15:00 AM", "spots":120},
		{time:"8:35:00 AM", "spots":180},
		{time:"8:45:00 AM", "spots":220},
		{time:"9:00:00 AM", "spots":260},
		{time:"9:15:00 AM", "spots":320},
		{time:"9:30:00 AM", "spots":380},
		{time:"9:45:00 AM", "spots":400},
		{time:"10:00:00 AM", "spots":500}
	]
	var tableColorArray;
	var rainbowGen = require('./rainbowGen')();
	var utils = require('./utils');
	return {
		drawTable : drawTable
	}
	function drawTable(table, config) {
		tableColorArray = rainbowGen.generateGradient(state.spectrum, state.range, tableData, 'spots');
		var tableRef = table.DataTable({
			"columns": config.columns,
			"order": config.sortOder,
			"rowCallback": function( row, data, dataIndex ) {
				var columns = $(row).children("td"), i=0;
				$.each(data, function(key, value){
					if (value !== null && value !== undefined) {
						$(columns[i])
						.addClass('font-bold')
						.css('background-color', tableColorArray[value])
						.css('color', utils.getContrastColor(tableColorArray[value]));
					} else {
						$(columns[i]).removeClass('font-bold').text('-');
					}
					i++;
				});
			}
		});

		tableRef.rows.add(tableData);
		tableRef.draw();
		return tableRef;
	}
}

module.exports = heatTable;
