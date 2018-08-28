module.exports = { findFirstMissingPosInt };

//problem #4
function findFirstMissingPosInt(arr) {
  let min = null;
  let max = null;
  let table = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      table.set(arr[i], i);
      if (min === null) {
        min = arr[i];
      } else {
        if (min > arr[i]) {
          min = arr[i];
        }
      }

      if (max === null) {
        max = arr[i];
      } else {
        if (max < arr[i]) {
          max = arr[i];
        }
      }
    }
  }

  for (let j = min; j <= max; j++) {
    if (table.get(j) === undefined) {
      return j;
    }
  }
  return max + 1;
}

//problem #3
function mySerialize(root) {
  return null;
}

function mYDeserialize() {
  return null;
}

//problem #2
function multiplierMinus1(arr) {
  let multiplied = [];
  arr.forEach(function(num, i) {
    let m = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        m *= arr[j];
        console.log("i, j, m = " + i + ", " + j + ", " + m);
      }
    }
    multiplied.push(m);
  });

  return multiplied;
}

//problem #1
function areThereAdders(arr, k) {
  let table = new Map();
  for (let i = 0; i < arr.length; i++) {
    let key = table.get(k - arr[i]);
    console.log("arr[" + i + "], key = " + arr[i] + ", " + key);
    if (key !== undefined) {
      return true;
    }

    table.set(arr[i], i);
  }
  return false;
}

//problem 0

function mergeLists(arr) {
  let mergedArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("before merge: " + mergedArr);
    mergedArr = merge(arr[i], mergedArr);
    console.log("after merge: " + mergedArr);
  }

  return mergedArr;
}

//[10 12 13 15], i = 3, j = 1
//, [12, 16, 40]   [10, 13, 15]
function merge(arr1, arr2) {
  let x = 0;
  let i = (j = 0);
  let newArr = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  while (i < len1) {
    x++;
    if (x > 10) {
      return [];
    }
    while (j < len2) {
      x++;
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i++]);
        break;
      } else {
        newArr.push(arr2[j++]);
      }
    }

    if (j >= len2) {
      newArr.push(arr1[i++]);
    }
  }

  while (j < len2) {
    newArr.push(arr2[j++]);
  }

  return newArr;
}

function merge2(arr1, arr2) {
  var newLen = arr1.length + arr2.length;
  var mergedArray = new Array(newLen);

  var len1 = arr1.length;
  var len2 = arr2.length;
  var i = 0,
    j = 0,
    k = 0;
  while (i < len1) {
    while (j < len2) {
      if (arr1[i].num <= arr2[j].num) {
        mergedArray[k++] = arr1[i++];

        break;
      } else {
        mergedArray[k++] = arr2[j++];
      }
    }

    if (j >= len2) {
      mergedArray[k++] = arr1[i++];
    }
  }

  //if (len1 < len2) {
  while (j < len2) {
    mergedArray[k++] = arr2[j++];
  }
  //}

  return mergedArray;
}

//problem 26
class MyLinkedList {
  constructor(arr) {
    this.firstLink = null;
    this.lastLink = null;
  }

  getCurrent() {
    return null;
  }

  getNext() {
    return null;
  }

  addLinke(key) {
    let link = new MyLink(key);
    if (this.currentLink === null) {
      this.firstLink = link;
      this.l;
    } else {
      this.currentLink.setNextLink(key);
      link.setPreviousLink(this.currentLink);
      this.lastLink = link;
    }
  }

  deleteLinkFromEnd(k) {
    let link = this.lastLink;
    for (var i = k; i > 0; k--) {
      k--;
      link = link.getPreviousLink();
    }

    return link;
  }
}

class MyLink {
  constructor(key) {
    this.key = key;
    this.previousLink = null;
    this.nextLink = null;
  }

  getKey() {
    return this.key;
  }

  setNextLink(link) {
    this.nextLink = link;
  }

  setPreviousLink(link) {
    this.previousLink = iink;
  }
}

//problem 27
function problem27(str) {
  var stack = [];
  var wellFormed = true;
  str.split("").forEach(function(bracket) {
    var popped;
    console.log("bracket = " + bracket);
    switch (bracket) {
      case "(":
      case "{":
      case "[":
        stack.push(bracket);
        break;
      case "}":
        popped = stack.pop();
        stack.push(bracket);
        if (popped != "}") {
          wellFormed = false;
        }
        break;
      case "]":
        popped = stack.pop();
        if (popped != "]") {
          wellFormed = false;
        }
        break;
      case ")":
        popped = stack.pop();
        if (popped != ")") {
          wellFormed = false;
        }
        break;
      default:
        wellFormed = false;
        break;
    }
    console.log("popped = " + popped);
    console.log(stack);
  });

  return wellFormed;
}
