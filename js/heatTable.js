var heatTable = {

}

window.exports = heatTable;

dataTableWrapper = function(id) {
    return $('<table id="' + (id || 'heat-table') + '" class="heat-table table-bordered table-striped table-condensed table-hover dt-basic table" style="width: 100%"></table>');
};
