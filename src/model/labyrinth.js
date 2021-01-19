export const CellType = {
	WALL: "wall",
	PATH: "path",
};

Object.freeze(CellType);

export default class Labyrinth {
	constructor() {
		this.currentWall = [];
		this.init();
	}

	get width() {
		return 31;
	}

	get height() {
		return 31;
	}

	cellAt(x, y) {
		if (x < 0 || y < 0) {
			return null;
		}

		if (x >= this.width || y >= this.height) {
			return null;
		}

		return this.matrix[y][x];
	}

	set(x, y, value) {
		if (x < 0 || y < 0) {
			return;
		}

		if (x >= this.width || y >= this.height) {
			return;
		}

		this.matrix[y][x] = value;
	}

	init() {
		this.matrix = Array(this.height).fill(null);
		const starts = [];
		for (let y = 0; y < this.height; y++) {
			this.matrix[y] = Array(this.width).fill(null);
			for (let x = 0; x < this.width; x++) {
				//壁
				if (x === 0 || y === 0 || x === this.width - 1 || y === this.height - 1) {
					this.matrix[y][x] = CellType.WALL;
					continue;
				}

				this.matrix[y][x] = CellType.PATH;

				if (x % 2 === 0 && y % 2 === 0) {
					starts.push({ x, y });
				}
			}
		}

		while (starts.length > 0) {
			const index = Math.floor(Math.random() * starts.length);
			const cell = starts[index];
			starts.splice(index, 1);
			const { x, y } = cell;

			if (this.matrix[y][x] !== CellType.WALL) {
				this.currentWall.splice(0); //Clear array
				this.extendWall(x, y);
			}
		}
	}

	isCurrentWall(x, y) {
		return this.currentWall.some((cell) => cell.x === x && cell.y === y);
	}

	setWall(x, y) {
		this.matrix[y][x] = CellType.WALL;
		if (x % 2 == 0 && y % 2 == 0) {
			this.currentWall.push({ x, y });
		}
	}

	extendWall(x, y) {
		const direction = [];
		if (this.matrix[y - 1][x] !== CellType.WALL && !this.isCurrentWall(x, y - 2)) {
			direction.push("up");
		}
		if (this.matrix[y + 1][x] !== CellType.WALL && !this.isCurrentWall(x, y + 2)) {
			direction.push("down");
		}
		if (this.matrix[y][x - 1] !== CellType.WALL && !this.isCurrentWall(x - 2, y)) {
			direction.push("left");
		}
		if (this.matrix[y][x + 1] !== CellType.WALL && !this.isCurrentWall(x + 2, y)) {
			direction.push("right");
		}

		if (direction.length > 0) {
			this.setWall(x, y);

			let isPath = false;
			const index = Math.floor(Math.random() * direction.length);
			switch (direction[index]) {
				case "up":
					isPath = this.matrix[y - 2][x] !== CellType.WALL;
					this.setWall(x, --y);
					this.setWall(x, --y);
					break;
				case "down":
					isPath = this.matrix[y + 2][x] !== CellType.WALL;
					this.setWall(x, ++y);
					this.setWall(x, ++y);
					break;
				case "left":
					isPath = this.matrix[y][x - 2] !== CellType.WALL;
					this.setWall(--x, y);
					this.setWall(--x, y);
					break;
				case "right":
					isPath = this.matrix[y][x + 2] !== CellType.WALL;
					this.setWall(++x, y);
					this.setWall(++x, y);
					break;
			}
			if (isPath) {
				this.extendWall(x, y);
			}
		} else {
			const beforeCell = this.currentWall.pop();
			if (beforeCell !== undefined) {
				this.extendWall(beforeCell.x, beforeCell.y);
			}
		}
	}

	isVertex(x, y) {
		return this.countPath(x, y) !== 2;
	}

	countPath(x, y) {
		if (this.cellAt(x, y) === CellType.WALL) {
			return 0;
		}

		let c = 0;

		if (this.cellAt(x, y - 1) !== CellType.WALL) {
			c++;
		}
		if (this.cellAt(x, y + 1) !== CellType.WALL) {
			c++;
		}
		if (this.cellAt(x - 1, y) !== CellType.WALL) {
			c++;
		}
		if (this.cellAt(x + 1, y) !== CellType.WALL) {
			c++;
		}

		return c;
	}

	isWall(x, y) {
		return this.cellAt(x, y) === CellType.WALL;
	}

	copy() {
		const labyrinth = new Labyrinth();
		for (let y = 0; y < labyrinth.height; y++) {
			labyrinth.matrix[y] = [...this.matrix[y]];
		}
		return labyrinth;
	}
}
