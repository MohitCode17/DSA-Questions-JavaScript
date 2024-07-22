/*
👉 Total Moves For Bishop!

Problem Description

Given the position of a Bishop (A, B) on an 8 * 8 chessboard.

Your task is to count the total number of squares that can be visited by the Bishop in one move.

The position of the Bishop is denoted using row and column number of the chessboard.

Input Format
First argument is an integer A denoting the row number of the bishop.
Second argument is an integer B denoting the column number of the bishop.

Example Input
 A = 4
 B = 4

Example Output
 13
*/

const bishopMoves = function (A, B) {
  let count = 0;

  count += Math.min(8 - A, 8 - B);
  count += Math.min(A - 1, 8 - B);
  count += Math.min(8 - A, B - 1);
  count += Math.min(A - 1, B - 1);

  return count;
};

console.log(bishopMoves(4, 4));
