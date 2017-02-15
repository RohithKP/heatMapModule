"use strict";
var fs = require('fs'),
    browserify = require('browserify'),
    watchify = require('watchify');

(function _process(Source, outputPath) {
    var minifyify = "minifyify";
    var builder = new browserify({ //Browserify build instance
        entries: [Source],
        plugin: process.argv[2] && process.argv[2] == "watch" ? [watchify] : [minifyify],
        debug: true
    });
    var _buildCounter = 0; //simple counter to differentiate console messages
    function bundle() {
        _buildCounter++;
        builder
            .bundle(function (err, buff) {})
            .pipe(fs.createWriteStream(outputPath).on('close', function() {
                console.log([_buildCounter, "BUILD COMPLETE", outputPath.split("/").reverse()[0]]);
            }));
    }

    if (process.argv[2] && process.argv[2] == "watch") {
        builder.on('update', bundle);
    }
    bundle();
    return _process;
})
('js/main.js', 'js-dist/bundle.js');
