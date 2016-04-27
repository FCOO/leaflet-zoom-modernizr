# leaflet-zoom-modernizr
>
[Modernizr]: https://modernizr.com/


## Description

This package contains two parts:
- a plugin for `leaflet.Map` that will add [Modernizr]-styled zoom level css class to map element for easy style updates based on zoom levels 
- a [SASS](http://sass-lang.com/) `@mixin` to create css-classes to show/hide or alter size of elements

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-zoom-modernizr.git --save`

## Demo
http://FCOO.github.io/leaflet-zoom-modernizr/demo/ 
## Usage

### Leaflet

Will add/remove the following classes to the maps container-element

	leaflet-zoom-[N]
	leaflet-zoom-[N]-up
	leaflet-zoom-[N]-down
	no-leaflet-zoom-[N]
	no-leaflet-zoom-[N]-up
	no-leaflet-zoom-[N]-down


where `N` is the zoom-level

#### Example
To have a element with `class="my-class"` on the map to change background-color at a specific zoom-level >= 8

	.leaflet-zoom-8-up    .my-class { background-color: red;  }
	.no-leaflet-zoom-8-up .my-class { background-color: blue; } 

or 

	.leaflet-zoom-8-up   .my-class { background-color: red;  }
	.leaflet-zoom-7-down .my-class { background-color: blue; } 
	

### SASS `@mixin`

#### `@mixin show-and-hide-for-leaflet-zoom-modernizr( $min-zoom, $max-zoom, $incl-table-display )`
Create classes to display/hide elements with class
 
	show-for-leaflet-zoom-[N]
	hide-for-leaflet-zoom-[N]
	show-for-leaflet-zoom-[N]-up
	hide-for-leaflet-zoom-[N]-up
	show-for-leaflet-zoom-[N]-down
	hide-for-leaflet-zoom-[N]-down

where `N` is the between `$min-zoom` and `$max-zoom`

#### `@mixin leaflet-zoom-size( $max-size, $max-zoom, $selector: '&', $auto-hide: true)`
Creates css to scale a element to the map zoom. 
- `$max-size` - The size of the element at map-zoom-level = $max-zoom
- `$max-zoom` - The zoom-level where the element has size = $max-size
- `$selector` - the selector of the element(s). Default '&' means the mixin is included inside a class-declaration
- `$auto-hide` - If true the element will be hidden when the element is smaller than 2px 


Create size-style for `$selector` for zoom-levels `$max-zoom` down trough 1 where the size (`widthxheigth` ) is `$max-size` at zoom-level  `$max-zoom` and the size is decreases by power of 2 to match the size of the map.
When the size is < 2px no css is crested. If `$auto-hide` is `true` a `display: hide` is added for `leaflet-zoom-[N]-down` where N is the zoom-level where the size < 2px

The size-style contains of `width`, `height`, `margin-left`, and `margin-top`, e.g.

	width      :  20px;
	height     :  20px;
	margin-left: -10px;
	margin-top : -10px;
 

#### Example
See `/demo/demo.scss` for an example on how to use `leaflet-zoom-size` 


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-zoom-modernizr/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

[Niels Holt](http://github.com/NielsHolt)

