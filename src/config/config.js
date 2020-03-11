(function (jq) {

    'use strict';

    setTimeout(function () {

        var configLeafletMap = L.map('afConfigLeafletMap').setView([55.604961, 13.001714], 13),
            tuileUrl = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            attrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            marker,
            osm;

        osm = L.tileLayer(tuileUrl, {
            minZoom: 8,
            maxZoom: 20,
            attribution: attrib
        });

        osm.addTo(configLeafletMap);

        marker = L.marker([configLat, configLon], {
            draggable: 'true'
        }).addTo(configLeafletMap);

        marker.on('dragend', function (event) {
            var position = marker.getLatLng();
            marker.setLatLng(position, {
                draggable: 'true'
            });

            jq('input[name="lat"]').val(position.lat);
            jq('input[name="lon"]').val(position.lng);
        });


    }, 100);

}(jQuery));



