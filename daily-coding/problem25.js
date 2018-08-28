function match(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let len3;
  let x, y;

  for (let i = 0, j = 0, k = 0; i < len1; i++, j++, k++) {
    if (str2[j] === ".") {
      i++;
      j++;
    }
    if (str2[j] === "*") {
      let back = str2.split("*")[1];
      len3 = back.length;
      for (x = len1 - 1, y = len2 - 1; y >= len2 - len3; x--, y--) {
        if (str1[x] !== str2[y]) {
          console.log("return false");
          return false;
        }
      }
    }
  }

  return true;
}

module.exports = { match };
