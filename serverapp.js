let http = require("http");

const MyNode = require("./treestructure/mynode");
const MyTree = require("./treestructure/mytree");
//const MyGraphy = require("./graph/MyGraph");
//const GraphNode = require("./graph/graphnode");
//let { findUniq, twoSum, calculate } = require("./meetup-friday/problems");

//const arr = [1, 2, 2, 3, 3, 4, 4];

//graph construction and clone
/*
let aGraph = new MyGraph();
var graphNode1 = new GraphNode(1);
var graphNode2 = new GraphNode(2);
var graphNode3 = new GraphNode(3);
var graphNode4 = new GraphNode(4);
var graphNode5 = new GraphNode(5);
var graphNode6 = new GraphNode(6);
var graphNode7 = new GraphNode(7);
var graphNode8 = new GraphNode(8);
var graphNode9 = new GraphNode(9);
var graphNode10 = new GraphNode(10);

graphNode1.edges.push(graphNode2);
graphNode1.edges.push(graphNode3);
graphNode1.edges.push(graphNode4);
graphNode3.edges.push(graphNode5);
graphNode3.edges.push(graphNode6);
graphNode3.edges.push(graphNode7);
graphNode7.edges.push(graphNode8);
graphNode8.edges.push(graphNode9);
graphNode9.edges.push(graphNode3);
*/
//binary tree construction
let aTree = new MyTree();
aTree.insert(new MyNode(54));
aTree.insert(new MyNode(26));
aTree.insert(new MyNode(93));

aTree.insert(new MyNode(17));
aTree.insert(new MyNode(77));

aTree.insert(new MyNode(31));
aTree.insert(new MyNode(44));
aTree.insert(new MyNode(55));
aTree.insert(new MyNode(20));
aTree.insert(new MyNode(19));
/*
const brackets = "([)]";
//problem 0
const param0 = [[17, 20, 32], [12, 15, 20], [10, 15, 30]];
//problem 1
const param11 = [10, 15, 3, 7];
const param12 = 10;

//problem 2
const param21 = [1, 2, 3, 4, 5];

//problem 3

//problem 4
const param41 = [3, 4, -1, 1];

let { findFirstMissingPosInt } = require("./daily-coding/problems");
*/

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the depth = " + aTree.findDeepestNode(aTree.getRoot()));
  })
  .listen(5000);
