/****************************************************************************
    leaflet-zoom-modernizr.js,

    (c) 2016, FCOO

    https://github.com/FCOO/leaflet-zoom-modernizr
    https://github.com/FCOO

****************************************************************************/
(function ($, L/*, window, document, undefined*/) {
    "use strict";

    L.Map.mergeOptions({
        zoomModernizr: true
    });

    L.Map.ZoomModernizr = L.Handler.extend({
        addHooks: function () {
            this._zoomModernizr();
            this._map.on('zoomend', this._zoomModernizr, this);
        },

      removeHooks: function () {
          this._map.off('zoomend', this._zoomModernizr, this);
      },

      _zoomModernizr: function ( /*e*/ ) {
            var map        = this._map,
                zoom       = map.getZoom() || 0,
                minZoom    = map.getMinZoom() || 0,
                maxZoom    = map.getMaxZoom(),
                $container = $(map.getContainer()),
                i;

            if (maxZoom === Infinity)
                maxZoom = L.TileLayer.prototype.options.maxZoom;

            for (i=minZoom; i<=maxZoom; i++ )
                $container
                    .modernizrToggle( 'leaflet-zoom-' + i          , i == zoom )
                    .modernizrToggle( 'leaflet-zoom-' + i + '-up'  , i <= zoom )
                    .modernizrToggle( 'leaflet-zoom-' + i + '-down', i >= zoom );
      }
    });

    L.Map.addInitHook('addHandler', 'zoomModernizr', L.Map.ZoomModernizr);


}(jQuery, L, this, document));



