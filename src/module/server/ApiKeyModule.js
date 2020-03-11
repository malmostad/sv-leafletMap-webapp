define(function (require) {
    'use strict';

    var
        appData = require('appData');

    return {
        getApiKey: function () {

            var service = appData.get('mapService'),
                apiKey;

            if (service === 'Google') {

                apiKey = appData.get('googleApiKey');

            } else if (service === 'Mapbox') {

                apiKey = appData.get('mapboxApiKey');
            }

            return apiKey;
        }
    };
});