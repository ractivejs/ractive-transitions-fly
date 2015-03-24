# ractive-transitions-fly

*Find more Ractive.js plugins at [ractivejs.org/plugins](http://ractivejs.org/plugins)*

This transition uses CSS transforms to 'fly' elements to their natural location on the page, fading in from transparent as they go. By default, they will fly in from left.

```html
{{#if visible}}
  <div intro-outro='fly'>
    this will fly in and out of view
    depending on the value of `visible`
  </div>
{{/if}}
```

## Installation

Install from npm...

```bash
npm install ractive-transitions-fly
```

...or download it and add it as a script tag to your page:

```html
<script src='ractive.js'></script> <!-- must go first! -->
<script src='ractive-transitions-fly.js'></script>
```

## Use as a module...

**Note: previous versions of this plugin would 'self-register'. If you are using a module system such as Browserify, Webpack or RequireJS, that's no longer the case - you must explicitly register the plugin.


### CommonJS

```js
var Ractive = require( 'ractive' );

// To use the fly transition with a specific instance
var ractive = new Ractive({
  el: 'body',
  template: myTemplate,
  transitions: {
    fly: require( 'ractive-transitions-fly' )
  }
});

// To use it with components
MyComponent = Ractive.extend({
  template: componentTemplate,
  transitions: {
    fly: require( 'ractive-transitions-fly' )
  }
});

// To make it globally available to *all* instances
Ractive.transitions.fly = require( 'ractive-transitions-fly' );
```


### AMD

```js
define([ 'ractive', 'ractive-transitions-fly' ], function ( Ractive, fly ) {
  var ractive = new Ractive({
    el: 'body',
    template: myTemplate,
    transitions: {
      fly: fly
    }
  });
});
```


### ES6

```js
import Ractive from 'ractive';

var ractive = new Ractive({
  el: 'body',
  template: myTemplate,
  transitions: { fly }
});
```


## Use as a `<script>` tag

If you include ractive-transitions-fly as a script tag, it will 'self-register' with the global `Ractive` object, and all Ractive instances will be able to use it.



## Parameters

You can specify the `x` and `y` positions to fly in from (or out to), using the conventional syntax:

```html
<div intro-outro='fly:{"x":0,"y":"-200"}'>this will fly down from above</div>
```

You can also specify the `delay`, `duration` and `easing` properties. Both `delay` and `duration` are in milliseconds. The `easing` value must be a valid CSS easing function (see http://cubic-bezier.com/).



## License

Copyright (c) 2013-15 Rich Harris. Licensed MIT.
