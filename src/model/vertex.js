import Edge from "./edge";

export const Color = {
	WHITE: "#fff",
	GRAY: "#666",
	BLACK: "333",
};

export default class Vertex {
	constructor(name, renderLocation) {
		this.name = name;
		this.color = Color.WHITE;
		this.renderLocation = renderLocation;
		this.edges = [];
		this.route = [];
	}

	link(other) {
		this.edges.push(new Edge(this, other));
	}

	visit() {		
		this.color = Color.GRAY;
		this.edges.forEach(e => {
			e.vertTo.visit();
		});
		this.color = Color.BLACK;
	}
}
