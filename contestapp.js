let http = require("http");
let { indivisibleSum } = require("./competition/contest2");

//answers http://codeforces.com/group/ylgaGzHfaj/blog

const param21 =
  "abacadefawwwwwwwwwwayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
const param22 = "aaaa";
const param23 = "+";
const param241 = 7;
const param242 = [994, 518, 941, 851, 647, 2, 581];
const param25 = "";

const param271 = 4;
const param272 = [1, 2, 3, 4];

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the answer = " + indivisibleSum(param271, param272));
  })
  .listen(5000);
