

export default fly;
var DEFAULTS = {
	duration: 400,
	easing: "easeOut",
	opacity: 0,
	x: -500,
	y: 0
};

function addPx(num) {
	if (num === 0 || typeof num === "string") {
		return num;
	}

	return num + "px";
}
function fly(t, params) {
	var x, y, offscreen, target;

	params = t.processParams(params, DEFAULTS);

	x = addPx(params.x);
	y = addPx(params.y);

	offscreen = {
		transform: "translate(" + x + "," + y + ")",
		opacity: 0
	};

	if (t.isIntro) {
		// animate to the current style
		target = t.getStyle(["opacity", "transform"]);

		// set offscreen style
		t.setStyle(offscreen);
	} else {
		target = offscreen;
	}

	t.animateStyle(target, params).then(t.complete);
}