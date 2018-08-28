const arr = [1, 1, 2, 2, 3, 4, 4];

// number 1
/*
    Given an array of numbers, where there are duplicates of only 2 copies, find the unique number and return the index.
    array is sorted
    hint: what is the best time complexity you can do for this?
*/
function findUniq(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      return i;
    }
  }
}

// number 2
// given an unsorted array, find two numbers that add up to target in O(n)
function twoSum(nums, target) {
  let alreadySeen = new Map();
  for (var i = 0; i < nums.length; i++) {
    console.log(target - nums[i]);

    let hasSeenKey = alreadySeen.get(target - nums[i]);
    console.log("hasSeenKey = " + hasSeenKey);
    console.log("nums[" + i + "] = " + nums[i]);
    console.log("nums[hasSeenKey] = " + nums[hasSeenKey]);
    console.log("hasSeenKey + nums[i] = " + nums[hasSeenKey] + nums[i]);
    if (nums[hasSeenKey] + nums[i] === target) {
      return [nums[hasSeenKey], nums[i]];
    }
    alreadySeen.set(nums[i], i);
  }

  return [];
}

//twoSum([3, 2, 4], 6);

// number 3
/* 
    write a function that do the basic functionality of a calculator for +, -, *, /
    for division, just round down.  
*/
function calculate(s) {
  console.log("s = " + s);
  let res = 0,
    curr = 0,
    num = 0,
    op = "+";
  s.split("").forEach((val, i) => {
    console.log("val = " + val);
    if (!isNaN(parseInt(val, 10))) {
      num = num * 10 + parseInt(val, 10);
      console.log("num = " + num);
    }
    if (
      val === "+" ||
      val === "-" ||
      val === "*" ||
      val === "/" ||
      i === s.length - 1
    ) {
      console.log("in switch");
      switch (op) {
        case "+":
          curr += num;
          break;
        case "-":
          curr -= num;
          break;
        case "*":
          curr *= num;
          break;
        case "/":
          const sign = curr < 0 ? -1 : 1;
          curr = Math.floor(Math.abs(curr) / num) * sign;
          break;
      }
      if (val === "+" || val === "-" || i === s.length - 1) {
        res += curr;
        curr = 0;
      }
      num = 0;
      op = val;
    }
  });
  return res;
}

calculate("3+2*2"); // 7

module.exports = { findUniq, twoSum, calculate };
