let http = require("http");

let {
  spiralMatrix,
  slidingPuzzle
} = require("./meetup-friday/problems-20180824");

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralMatrix(arr));

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "This is the answer = " +
        JSON.stringify(
          myTree.buildBalancedTree([2, 4, 6, 7, 12, 13, 19, 20, 24])
        )
    );
  })
  .listen(5000);
