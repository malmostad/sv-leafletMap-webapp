(() => {

    'use strict';

    var router = require('router'),
        globalAppData = require('globalAppData'),
        appData = require('appData'),

        logUtil = require('LogUtil');

    router.get('/', (req, res) => {

        var lat = appData.get('lat'),
            lon = appData.get('lon');

        res.render({
            lat: lat,
            lon: lon
        });
    });

})();