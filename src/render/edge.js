export default function renderEdge(g, edge) {
	const fromLocation = edge.vertFrom.renderLocation;
	const toLocation = edge.vertTo.renderLocation;

	g.save();
	g.strokeStyle = "#333";
	g.lineWidth = 1.0;
	g.beginPath();
	g.translate(5, 5);
	g.moveTo(fromLocation.x, fromLocation.y);
	g.lineTo(toLocation.x, toLocation.y);
	g.stroke();
	g.restore();
}
