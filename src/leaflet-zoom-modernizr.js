/****************************************************************************
	leaflet-zoom-modernizr.js,

	(c) 2016, FCOO

	https://github.com/FCOO/leaflet-zoom-modernizr
	https://github.com/FCOO

****************************************************************************/
;(function ($, L, window, document, undefined) {
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
			var map					= this._map,
					zoom				= map.getZoom(),
					minZoom			= map.getMinZoom(),
					maxZoom			= map.getMaxZoom(),
					$container	= $(map.getContainer()),
					i;
			for (i=minZoom; i<=maxZoom; i++ ){
				$container.toggleClass( 'leaflet-zoom-' + i						, i == zoom	);
				$container.toggleClass( 'leaflet-zoom-' + i + '-up'		,	i <= zoom	);
				$container.toggleClass( 'leaflet-zoom-' + i + '-down'	,	i >= zoom	);

				$container.toggleClass( 'no-leaflet-zoom-' + i						, i != zoom	);
				$container.toggleClass( 'no-leaflet-zoom-' + i + '-up'		,	i > zoom	);
				$container.toggleClass( 'no-leaflet-zoom-' + i + '-down'	,	i < zoom	);
			}
	  }
	});

	L.Map.addInitHook('addHandler', 'zoomModernizr', L.Map.ZoomModernizr);


}(jQuery, L, this, document));



