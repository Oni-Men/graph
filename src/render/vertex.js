import renderEdge from "./edge";

export default function renderVertex(g, vertex) {
	g.save();
	vertex.edges.forEach((edge) => {
		renderEdge(g, edge);
	});
	g.translate(Math.floor(vertex.renderLocation.x), Math.floor(vertex.renderLocation.y));
	g.fillStyle = vertex.color;
	g.lineWdith = 1.0;

	g.strokeStyle = "#666";
	g.beginPath();
	g.arc(5, 5, 2.5, 0, 2 * Math.PI);
	g.fill();
	g.stroke();
	g.font = "bold 4px sans";
	//g.fillStyle = "#fff";
	//g.fillText(vertex.name, 10, 10);
	g.restore();
}
