let matrix = [
  [1, 2, 3, 4],
  [5, 4, 5, 6],
  [7, 8, 9, 7],
];
var spiralOrder = function (matrix) {
  let top = 0;
  let left = 0;
  let res = [];
  let i;
  let bottom = matrix.length;
  let right = matrix[0].length;
  let c = 0;
  let max = matrix.length * matrix[0].length;
  while (c < max) {
    for (i = left; c < max && i < right; i++) {
      res.push(matrix[top][i]);
      c++;
    }
    top = top + 1;
    for (i = top; c < max && i < bottom; i++) {
      res.push(matrix[i][right - 1]);
      c++;
    }
    right = right - 1;
    for (i = right - 1; c < max && i >= left; i--) {
      res.push(matrix[bottom - 1][i]);
      c++;
    }
    bottom = bottom - 1;
    for (i = bottom - 1; c < max && i >= top; i--) {
      res.push(matrix[i][left]);
      c++;
    }
    left = left + 1;
  }
  return res;
};

console.log(spiralOrder(matrix));
