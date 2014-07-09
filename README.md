Ractive.js fly transition plugin
================================

*Find more Ractive.js plugins at [ractivejs.org/plugins](http://ractivejs.org/plugins)*

This transition uses CSS transforms to 'fly' elements to their natural location on the page, fading in from transparent as they go. By default, they will fly in from left.

[See the demo here.](http://ractivejs.github.io/Ractive-transitions-fly/)


Usage
-----

Include this file on your page below Ractive, e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/ractive-transitions-fly.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( 'ractive-transitions-fly' );
```

To get `ractive-transitions-fly.min.js` you can:

- Use CDN: `//cdn.jsdelivr.net/ractive.transitions-fly/latest/ractive-transitions-fly.min.js`.
- Use bower: `$ bower i ractive-transitions-fly`.
- [Download the latest release](https://github.com/ractivejs/ractive-transitions-fly/releases).
- Clone the repo: `$ git clone https://github.com/ractivejs/ractive-transitions-fly.git`.


You can specify the `x` and `y` positions to fly in from (or out to), using the conventional syntax:

```html
<div intro-outro='fly:{"x":0,"y":"-200"}'>this will fly down from above</div>
```

You can also specify the `delay`, `duration` and `easing` properties. Both `delay` and `duration` are in milliseconds. The `easing` value must be a valid CSS easing function (see http://cubic-bezier.com/).



License
-------

Copyright (c) 2013 Rich Harris. Licensed MIT.

Created with the [Ractive.js plugin template](https://github.com/RactiveJS/Plugin-template) for Grunt.
