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
                zoom: state.zoom
            });
        }
    });
});