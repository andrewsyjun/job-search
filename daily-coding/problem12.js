function findSteps(n) {
  let counter = [];
  counter[0] = 1;
  counter[1] = 1;

  for (let i = 2; i <= n; i++) {
    counter[i] = counter[i - 1] + counter[i - 2];
  }

  return counter[n];
}

module.exports = { findSteps };
