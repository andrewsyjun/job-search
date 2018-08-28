let http = require("http");

let { match } = require("./daily-coding/problem25");
let { findMinSteps, getKnightMinStep } = require("./daily-coding/problem23");
let { findSteps } = require("./daily-coding/problem12");
let { findLenOfLongestSubStr } = require("./daily-coding/problem13");
let { decodeMessage } = require("./daily-coding/problem7");
let { fib } = require("./daily-coding/fib");

const param29enc = "AAAABBBCCDAA";
const param29dec = "4A3B2C1D2A";

const param251 = "stringy";
const param252 = "st*gy";

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the answer = " + findLenOfLongestSubStr("abcba", 2));
  })
  .listen(5000);
