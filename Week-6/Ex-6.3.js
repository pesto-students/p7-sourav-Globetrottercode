let arr = [0, 1, 2, 0, 0, 2, 2, 1, 0];

let sort012 = function (arr) {
  let m = 0;
  let l = 0;
  let h = arr.length - 1;
  while (m <= h) {
    if (arr[m] === 0) {
      [arr[m], arr[l]] = [arr[l], arr[m]];
      l++;
      m++;
    }
    if (arr[m] === 1) {
      m++;
    }
    if (arr[m] === 2) {
      [arr[m], arr[h]] = [arr[h], arr[m]];
      h--;
    }
  }
  return arr;
};

console.log(sort012(arr));
