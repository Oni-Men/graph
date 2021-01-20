import { renderText } from "../util/font";

const textRenderingOption = {
	centered: true,
	middle: true,
	edged: true,
};

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

	if (edge.weight !== Number.POSITIVE_INFINITY) {
		const middleX = (fromLocation.x + toLocation.x) / 2;
		const middleY = (fromLocation.y + toLocation.y) / 2;
		g.font = "10px monospace";
		g.lineWidth = 1.25;
		g.strokeStyle = "#333";
		g.fillStyle = "#fff";
		renderText(g, edge.weight, middleX, middleY, textRenderingOption);
	}
	g.restore();
}
