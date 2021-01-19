import renderVertex from "./vertex";

export default function renderGraph(g, graph) {
	for (let i = 0; i < graph.size(); i++) {
		renderVertex(g, graph.get(i));
	}
}
