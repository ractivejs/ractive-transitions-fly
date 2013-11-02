/*

	Ractive-transitions-fly
	=======================

	Version 0.1.0.

	<< description goes here... >>

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'Ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/Ractive.js'></script>
	    <script src='lib/Ractive-transitions-fly.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'Ractive-transitions-fly' );

	<< more specific instructions for this plugin go here... >>

*/

(function ( global, factory ) {

	'use strict';

	// Common JS (i.e. browserify) environment
	if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
		factory( require( 'ractive' ) );
	}

	// AMD?
	else if ( typeof define === 'function' && define.amd ) {
		define([ 'Ractive' ], factory );
	}

	// browser global
	else if ( global.Ractive ) {
		factory( global.Ractive );
	}

	else {
		throw new Error( 'Could not find Ractive! It must be loaded before the Ractive-transitions-fly plugin' );
	}

}( typeof window !== 'undefined' ? window : this, function ( Ractive ) {

	'use strict';

	var fly, defaults;

	defaults = {
		duration: 400,
		easing: 'easeInOut',
		opacity: 0,
		x: -500,
		y: 0
	};

	fly = function ( t ) {
		var offscreen, target, currentOpacity;

		offscreen = {
			transform: 'translate(' + ( t.x || defaults.x ) + 'px,' + ( t.y || defaults.y ) + 'px)',
			opacity: 0
		};

		if ( t.isIntro ) {
			currentOpacity = t.getStyle( 'opacity' );

			console.log( 'currentOpacity: "%s"', currentOpacity );

			t.setStyle( offscreen );
			
			target = {
				transform: 'translate(0,0)',
				opacity: currentOpacity
			};
		} else {
			target = offscreen;
		}

		// set defaults
		if ( t.duration === undefined ) {
			t.duration = defaults.duration;
		}

		if ( t.easing === undefined ) {
			t.easing = defaults.easing;
		}

		t.animateStyle( target );
	};

	Ractive.transitions.fly = fly;

}));