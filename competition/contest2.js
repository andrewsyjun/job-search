module.exports = { indivisibleSum };

//problem 7
function indivisibleSum(size, numArr) {
  let len = size - 1;
  let maxSum = 0;
  //find all susets of numArr
  for (var i = 0; i < size; i++) {
    let shifted = numArr.shift();
    let returnedVal = 0;
    returnedVal = findMinSumSubset(numArr);
    if (returnedVal > maxSum) {
      maxSum = returnedVal;
    }
    numArr.push(shifted);
  }

  //check if each subset is divisible by 10

  //return the subset with max sum value
  return maxSum;
}

function findMinSumSubset(numArr) {
  return o;
}

//problem 5
function evenString() {}

//problem 4
function moduloSum(num, arr) {
  let len = arr.length;
  let total = 0;

  arr.forEach(function(entry) {
    total += num % entry;
  });

  return total;
}

//problem 3
function maxRange(str) {
  let pCounter = 0;
  let nCounter = 0;
  str.split("").forEach(function(op, i) {
    switch (op) {
      case "+":
        pCounter++;
        break;
      default:
        nCounter++;
        break;
    }
  });

  if (pCounter > nCounter) {
    return pCounter;
  }

  return nCounter;
}

//problem 2
function afterA(str) {
  let aFound = false;
  let counter = 0;
  let table = new Map();
  str.split("").forEach(function(letter, i) {
    let key = undefined;
    switch (letter) {
      case "a":
        if (!aFound) {
          aFound = true;
        } else {
          key = table.get(letter);
          if (key === undefined) {
            counter++;
            table.set(letter, i);
          }
        }
        break;
      default:
        if (aFound) {
          key = table.get(letter);
          if (key === undefined) {
            counter++;
            table.set(letter, i);
          }
        }
        break;
    }
  });

  return counter;
}

//problem 1
function subStringCount(str) {
  let counter = 0;
  let max = 0;
  str.split("").forEach(function(letter) {
    console.log(letter);
    switch (letter) {
      case "a":
        if (counter > max) {
          max = counter;
        }
        counter = 0;
        break;
      default:
        counter++;
        console.log("max, counter = " + max + ", " + counter);
        break;
    }
  });

  if (counter > max) {
    max = counter;
  }

  return max;
}
