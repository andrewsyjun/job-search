require("babel-register");

class MyNdoe {
  constructor(key) {
    this.size = -1;
    this.key = key;
    this.leftNode = null;
    this.rightNode = null;
    this.visited = false;
  }

  getSize() {
    return this.size;
  }

  incrementSize() {
    this.size++;
  }

  setLeftNode(aNode) {
    this.leftNode = aNode;
  }

  setRightNode(aNode) {
    this.rightNode = aNode;
  }

  getRightNode() {
    return this.rightNode;
  }

  getLeftNode() {
    return this.leftNode;
  }

  getKey() {
    return this.key;
  }

  getChildren() {
    let arr = [];
    if (this.leftNode != null) {
      arr.push(this.leftNode);
    }
    if (this.rightNode != null) {
      arr.push(this.rightNode);
    }

    return arr;
  }
}

module.exports = MyNdoe;
