import Graph from "./model/graph.js";
import Labyrinth from "./model/labyrinth.js";
import renderGraph from "./render/graph.js";
import renderLabyrinth from "./render/labyrinth.js";

const canvas = document.querySelector("#view");
const g = canvas.getContext("2d");
const labyrinth = new Labyrinth();
const graph = new Graph(labyrinth);

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

function render() {
	g.resetTransform();
	g.fillStyle = "#333";
	g.fillRect(0, 0, canvas.width, canvas.height);

	g.translate(canvas.width / 2, canvas.height / 2);

	const scale = (Math.min(canvas.width, canvas.height) / (Math.max(labyrinth.width, labyrinth.height) * 10)) * 0.9;

	g.scale(scale, scale);
	renderLabyrinth(g, labyrinth);
	g.translate(Math.floor(-labyrinth.width / 2) * 10, Math.floor(-labyrinth.height / 2) * 10);
	renderGraph(g, graph);
}

const loop = () => {
	render();
	window.requestAnimationFrame(loop);
};

initHandlers();
loop();
