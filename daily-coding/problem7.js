let lookup = new Map();
let alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet.split("").forEach(function (l, idx) {
  lookup.set(idx + 1, l);
});

function decodeMessage(msg) {
  return decode(msg, msg.length);
}

function decode(msg, n) {
  let mem = [];
  mem[0] = 1;
  mem[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (msg[i - 2] == "1" || (msg[i - 2] == "2" && msg[i - 1] < "7")) {
      mem[i] = mem[i - 1] + mem[i - 2];
    } else {
      mem[i] = mem[i - 1];
    }
  }
  /*
  let count = 0;

  if (msg[n - 1] > 0) {
    count = decode(msg, n - 1);
  }

  console.log("msg[" + n + " - 2] = " + msg[n - 2]);
  console.log("msg[" + n + " - 1] = " + msg[n - 1]);
  if (msg[n - 2] == "1" || (msg[n - 2] == "2" && msg[n - 1] < "7")) {
    count += decode(msg, n - 2);
  }
  */

  return mem[n];
}
//test

module.exports = { decodeMessage };
