let http = require("http");

let MyTree = require("./treestructure/mytree");
let MyNode = require("./treestructure/mynode");

let myTree = new MyTree();
myTree.buildBalancedTree([2, 4, 6, 7, 12, 13, 19, 20, 24])

let key = 10;
console.log(myTree.findCeilingGiven(key));
console.log(myTree.calLongestPath());


http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "This is the answer = " +
      JSON.stringify(
        myTree.buildBalancedTree([2, 4, 6, 7, 12, 13, 19, 20, 24])
      )
    );
  })
  .listen(5000);
