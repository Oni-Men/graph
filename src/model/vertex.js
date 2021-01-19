import Edge from "./edge";

export default class Vertex {
	constructor(name, renderLocation) {
		this.name = name;
		this.renderLocation = renderLocation;
		this.edges = [];
		this.route = [];
	}

	link(other) {
		this.edges.push(new Edge(this, other));
	}
}
