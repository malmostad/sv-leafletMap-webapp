(function () {
    'use strict';

    var
        router = require('router'),
        appData = require('appData'),
        globalAppData = require('globalAppData'),

        logUtil = require('LogUtil');

    router.get('/', function (req, res) {

        var leafletScriptUrl = globalAppData.get('leafletScriptUrl'),
            height = appData.get('height'),
            zoom = appData.get('zoom');

        if (!leafletScriptUrl) {
            leafletScriptUrl = 'https://openlayers.org/api/OpenLayers.js';
        }

        if (!height) {
            height = 300;
        }

        if (!zoom) {
            zoom = 13;
        }

        logUtil.error(leafletScriptUrl);
        logUtil.error(zoom);
        logUtil.error(height);

        res.render('/', {
            zoom: zoom,
            height: height,
            leafletScriptUrl: leafletScriptUrl
        });

    });

}());