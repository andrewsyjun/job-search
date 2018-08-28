function fib(n) {
  let mem = [];
  mem[0] = 0;
  mem[1] = 1;

  for (let i = 2; i <= n; i++) {
    mem[i] = mem[i - 1] + mem[i - 2];
  }

  return mem[n];
}

module.exports = { fib };
