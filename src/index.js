(function () {
    'use strict';

    var
        router = require('router'),
        appData = require('appData'),
        globalAppData = require('globalAppData'),

        logUtil = require('LogUtil');

    router.get('/', function (req, res) {

        var leafletScriptUrl = globalAppData.get('leafletScriptUrl'),
            leafletCssUrl = globalAppData.get('leafletCssUrl'),
            shellUrl = appData.get('shellUrl'),
            height = appData.get('height'),
            zoom = appData.get('zoom'),
            lat = appData.get('lat'),
            lon = appData.get('lon'),
            toolTip = appData.get('toolTip'),

            preventScrollZoom = appData.get('preventScrollZoom'),
            preventMoveMap = appData.get('preventMoveMap'),
            preventDoubleClickZoom = appData.get('preventDoubleClickZoom'),

            useToolTip = (toolTip && toolTip !== '' ? true : false);

        if (!leafletScriptUrl) {
            leafletScriptUrl = 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js';
        }

        if (!height) {
            height = 300;
        }

        if (!zoom) {
            zoom = 13;
        }

        if (!shellUrl) {
            shellUrl = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
        }

        if (!leafletCssUrl) {
            leafletCssUrl = 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css';
        }

        if (!lat) {
            lat = '55.604961';
        }

        if (!lon) {
            lon = '13.001714';
        }

        res.render('/', {
            zoom: zoom,
            height: height,
            leafletScriptUrl: leafletScriptUrl,
            leafletCssUrl: leafletCssUrl,
            shellUrl: shellUrl,
            lat: lat,
            lon: lon,
            preventScrollZoom: preventScrollZoom,
            preventMoveMap: preventMoveMap,
            preventDoubleClickZoom: preventDoubleClickZoom,
            useToolTip: useToolTip,
            toolTip: toolTip
        });

    });

}());