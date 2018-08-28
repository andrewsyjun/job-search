class MyGraph {
  constructor() {
    this.vertex = null;
  }

  insert(node) { }

  cloneAGraph(vertex) {
    if (vertex === null) {
      return;
    }

    this.vertex.copyNode(vertex);

    this.clone(vertex, node.edges);
  }

  clone(currentNode, edges) {
    if (edges === null) {
      return;
    }

    let i = 0;
    while (edges.lenghth > 0) {
      let node = edges.shift();
      this.cloneAGraph(node);
      i++;
    }
  }

  findCeilingGiven(key) {
    return key;
  }
}

module.exports = MyGraph;
