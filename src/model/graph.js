import Vertex, { Color } from "./vertex";

export const Direction = {
	TOP: { x: 0, y: -1, type: "top" },
	LEFT: { x: -1, y: 0, type: "left" },
	BOTTOM: { x: 0, y: 1, type: "bottom" },
	RIGHT: { x: 1, y: 0, type: "right" },
};

export default class Graph {
	constructor(labyrinth) {
		this.vertices = [];
		this.startVertex = null;
		this.endVertex = null;
		if (labyrinth !== undefined) {
			this.fromLabyrinth(labyrinth);
		}
	}

	fromLabyrinth(labyrinth) {
		labyrinth = labyrinth.copy();
		let count = 0;

		const nextBranch = (pos, dir) => {
			while (true) {
				let path = labyrinth.countPath(pos.x, pos.y);
				if (labyrinth.isWall(pos.x + dir.x, pos.y + dir.y)) {
					return [pos, path];
				}
				pos.x += dir.x;
				pos.y += dir.y;
				path = labyrinth.countPath(pos.x, pos.y);
				if (path === 2) continue;

				return [pos, path];
			}
		};

		const loop = (pos, dir, v) => {
			//分岐まで進む
			const [vpos, path] = nextBranch({ ...pos }, { ...dir });
			if (labyrinth.cellAt(vpos.x, vpos.y) === "passed") {
				return;
			}
			const vertex = this.add(`v${count}`, { x: vpos.x * 10, y: vpos.y * 10 });
			count++;
			if (v !== null) {
				v.link(vertex);
			}
			if (vpos.x == 1 && vpos.y == 1) {
				this.startVertex = vertex;
				this.startVertex.name = "start";
			}
			if (vpos.x == labyrinth.width -2 && vpos.y == labyrinth.height -2) {
				this.endVertex = vertex;
				this.endVertex.name = "end";
			}
			if (path <= 1) {
				return;
			}

			labyrinth.set(vpos.x, vpos.y, "passed");

			loop({ ...vpos }, { ...Direction.TOP }, vertex);
			loop({ ...vpos }, { ...Direction.LEFT }, vertex);
			loop({ ...vpos }, { ...Direction.BOTTOM }, vertex);
			loop({ ...vpos }, { ...Direction.RIGHT }, vertex);
		};

		loop({ x: 1, y: 1 }, { ...Direction.RIGHT }, null);
		loop({ x: 1, y: 1 }, { ...Direction.BOTTOM }, null);
	}

	size() {
		return this.vertices.length;
	}

	add(name, renderPosition) {
		const vertex = new Vertex(name, renderPosition);
		this.vertices.push(vertex);
		return vertex;
	}

	get(index) {
		return this.vertices[index];
	}
}
