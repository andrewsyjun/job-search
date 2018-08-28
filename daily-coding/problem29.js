class Problem29 {
  constructor() {}

  encode(str) {
    let table = new Map();
    let encodedStr = "";
    str.split("").forEach(function(key, i, arr) {
      let val = table.get(key);
      if (val === undefined) {
        val = 1;
      } else {
        val++;
      }
      table.set(key, val);

      if (key !== arr[i + 1]) {
        table.set(val + key, val);
        table.delete(key);
      }
    });
    console.log(table);
    for (let key of table.keys()) {
      console.log("key = " + key);
      encodedStr += key;
    }
    return encodedStr;
  }

  decode(str) {
    let decoded = "";
    let arr = str.split("");
    while (arr.length > 0) {
      let i = parseInt(arr.shift());
      let letter = arr.shift();
      for (let j = 0; j < i; j++) {
        decoded += letter;
      }
    }
    return decoded;
  }
}

module.exports = Problem29;
