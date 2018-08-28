const MyNode = require("./mynode");

class MyTree {
  constructor() {
    this.tRoot = null;
  }

  insert(aNode) {
    if (this.tRoot == null) {
      this.tRoot = aNode;
      return;
    }

    this.insertInto(this.tRoot, aNode);
  }

  insertInto(topNode, aNode) {
    let incremented = false;

    if (topNode.getKey() >= aNode.getKey() && topNode.getLeftNode() === null) {
      topNode.setLeftNode(aNode);
      return;
    }

    if (topNode.getKey() < aNode.getKey() && topNode.getRightNode() === null) {
      topNode.setRightNode(aNode);
      return;
    }

    if (topNode.getKey() >= aNode.getKey()) {
      topNode.incrementSize();
      incremented = true;
      this.insertInto(topNode.getLeftNode(), aNode);
    }

    if (topNode.getKey() < aNode.getKey()) {
      if (!incremented) {
        topNode.incrementSize();
      }
      this.insertInto(topNode.getRightNode(), aNode);
    }
  }

  delete(aNode) {
    console.log("in delete");
  }

  find(aNode) {
    console.log("in return");
    return anode;
  }

  getRoot() {
    return this.tRoot;
  }

  draw() {
    console.log("in draw");
    let tree = "";
    return this.drawTree(this.tRoot, tree);
  }

  drawTree(aNode, tree) {
    if (aNode === null) {
      return "end";
    }

    return (
      tree +
      aNode.getKey() +
      " left  =>  " +
      this.drawTree(aNode.getLeftNode(), tree) +
      " right  =>  " +
      this.drawTree(aNode.getRightNode(), tree)
    );
  }

  drawBFS() {
    console.log("XXXdrawing bsfXXX");

    if (this.tRoot === null) {
      return "";
    }

    let arr = [this.tRoot];

    return this.drawNode(arr);
  }

  drawNode(nodes) {
    let msg = "";
    while (nodes.length > 0) {
      console.log("Hello");
      let aNode = nodes.shift();
      if (!aNode.visited) {
        msg = msg + aNode.getKey() + "<br>";
        aNode.visited = true;
      }
      //print left and right
      aNode.getChildren().forEach(child => {
        msg = msg + "child ====> " + child.getKey();
        child.visited = true;
        nodes.push(child);
      });
      msg = msg + "<br>";
    }

    return msg;
  }

  findDeepestNode(node) {
    console.log(node);
    if (node === null) {
      return 0;
    }
    if (node.getLeftNode() === null && node.getRightNode() === null) {
      return 1;
    }

    return (
      Math.max(
        this.findDeepestNode(node.getLeftNode()),
        this.findDeepestNode(node.getRightNode())
      ) + 1
    );
  }

  rangeLookup(root, interval) {
    //interval = [min, max]
    //tree.label = value, tree.left, tree.right
    //check if tree root is less than min
    if (root.label < interval[0]) {
      //traverse only the left and return
      this.getRnageLeft(root, interval[0]);
    }

    //check if tree root is greater than max
    if (root.label > interval[1]) {
      //traverse only the right and return
      this.getRangeRight(root.right, interval[1]);
    }
    //check if tree root is in between min and max
    this.getRange(root, interval);
  }

  buildBalancedTree(arr) {
    return this.buildTree(arr, 0, arr.length);
  }

  buildTree(arr, start, end) {
    if (start >= end) return null;

    let mid = Math.floor((end - start) / 2) + start;

    if (end > start) {
      return {
        val: arr[mid],
        left: this.buildTree(arr, start, mid),
        right: this.buildTree(arr, mid + 1, end)
      };
    }
  }

  findCeilingGiven(key) {
    return this.findCeiling(key, this.getRoot());
  }

  findCeiling(key, node) {
    if (node === null) {
      return null;
    }
    if (node.getKey() > key) {
      if (node.getLeftNode() === null || node.getLeftNode().getkey() < key) {
        return node.getKey();
      } else {
        this.findCeiling(key, node.getLeftNode());
      }
    } else {
      if (node.getRightNode() === null || node.getRightNode().getkey() < key) {
        this.findCeiling(key, node.getRightNode());
      } else {
        return node.getKey();
      }
    }
  }


  calcLongestPath() {
    let h = 0;
    let bag = [this.tRoot];
    let prevKey = null;
    while (bag.length > 0) {
      let node = bag.shift();
      if (node.getKey() === preKey) {
        h++;
      } else {
        h = 0;
        preKey = node.getKey();
      }

      bag.push(node.getLeftNode());
      bag.push(node.rightNode());
    }

  }
}

module.exports = MyTree;
