class GraphNode {
  constructor(label) {
    this.label = label;
    this.edges = [];
  }

  copyNode(node) {
    //copy label or key
    this.label = node.getLabel();

    //copy edges
    let len = edges.length - 1;
    this.edges = edges.slice(0, len);
  }

  getLabel() {
    return this.label;
  }

  getEdges() {
    return this.edges;
  }
}

module.exports = GraphNode;
