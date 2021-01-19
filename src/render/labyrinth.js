export default function renderLabyrinth(g, labyrinth) {
	g.save();
	g.translate(Math.floor(-labyrinth.width / 2) * 10, Math.floor(-labyrinth.height / 2) * 10);

	for (let y = 0; y < labyrinth.height; y++) {
		for (let x = 0; x < labyrinth.width; x++) {
			const cell = labyrinth.cellAt(x, y);

			if (cell === null) continue;
			g.fillStyle = cell === "wall" ? "#666" : "#ccc";
			g.strokeStyle = cell === "wall" ? "#666" : "#ccc";
			g.lineWidth = 0.2;
			g.fillRect(x * 10, y * 10, 10, 10);
			g.strokeRect(x * 10, y * 10, 10, 10);
		}
	}
	g.restore();
}
