define(function (require) {
    'use strict';

    var
        _ = require('underscore'),
        Component = require('Component'),
        template = require('/template/leafletMap');

    return Component.extend({
        template: template,

        filterState: function (state) {
            return _.extend({}, {
                height: state.height,
                zoom: state.zoom,
                shellUrl: state.shellUrl,
                leafletCssUrl: state.leafletCssUrl,
                lat: state.lat,
                lon: state.lon,
                preventScrollZoom: state.preventScrollZoom,
                preventMoveMap: state.preventMoveMap,
                preventDoubleClickZoom: state.preventDoubleClickZoom,
                useToolTip: state.useToolTip,
                toolTip: state.toolTip
            });
        }
    });
});