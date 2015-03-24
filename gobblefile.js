var gobble = require( 'gobble' );

gobble.cwd( __dirname );

module.exports = gobble( 'src' )
.transform( 'babel', {
	blacklist: [ 'es6.modules', 'useStrict' ],
	sourceMap: false
})
.transform( 'esperanto-bundle', {
	entry: 'ractive-transitions-fly',
	type: 'umd',
	name: 'Ractive.transitions.fly',
	sourceMap: false
});
