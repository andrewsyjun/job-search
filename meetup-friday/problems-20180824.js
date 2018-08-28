/* number1
    given a rotated array, find the target
    search([4, 5, 6, 7, 1, 2, 3], 5); // 1
*/
// sorry this is only for sharing please use your own environment for coding
function search(nums, target) {}

/* number2
    Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    spiralMatrix(arr); // [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
*/
function spiralMatrix(board) {
  let m = board[0].length;
  let n = board.length;
  console.log("m, n = " + m + ", " + n);
  let i = 0,
    j = 0,
    k = 0;
  let arr = [];

  for (i; i < m; i++) {
    for (j; j < n; j++) {
      arr.push(board[i][j]);
    }
  }
}

/*
On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

const arr = [
    [4, 1, 2],
    [5, 0, 3]
];

slidingPuzzle(arr); // 5
*/
function slidingPuzzle(board) {}

module.exports = { search, spiralMatrix, slidingPuzzle };
