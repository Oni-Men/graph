export default class Edge {
	constructor(vertFrom, vertTo, weight) {
		this.vertFrom = vertFrom;
		this.vertTo = vertTo;
		this.weight = weight === undefined ? Number.POSITIVE_INFINITY : weight;
	}
}
