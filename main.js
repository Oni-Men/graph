const canvas = document.querySelector("#view");
const g = canvas.getContext("2d");

function fitToWindow() {
	if (canvas) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
}

function initHandlers() {
	window.addEventListener("load", () => {
		fitToWindow();
	});

	window.addEventListener("resize", () => {
		fitToWindow();
	});
}

function render() {}

initHandlers();
(function () {
	render();
	window.requestAnimationFrame(arguments.callee);
})();
