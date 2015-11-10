import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/ractive-transitions-fly.js',
	plugins: [ babel() ],
	moduleName: 'Ractive.transitions.fly'
};
