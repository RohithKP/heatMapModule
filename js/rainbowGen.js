var Rainbow = require('rainbowvis.js');

function rainbowGen(){
	return {
		generateGradient: generateGradient
	}

	function generateGradient(spectrum, range, dataObjArr, dataKey, isChart){
		var colorArray = {};
		var rainbow = new Rainbow();
		if(range){
			rainbow.setNumberRange(range.minNumber, range.maxNumber);
		}
		rainbow.setSpectrum.apply(rainbow, spectrum);
		$.each(dataObjArr, function(index,item){
			var colorCode = '#'+rainbow.colourAt(item[dataKey]);
			colorArray[item[dataKey]] = colorCode;
			isChart ? item.color = colorCode : undefined;
		})

		return colorArray;
		// rainbowComp.set(rainbow);
	}

}

module.exports = rainbowGen;
