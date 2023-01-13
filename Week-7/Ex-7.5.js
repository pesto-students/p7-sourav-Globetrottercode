// Next Greater Element

let arr = [1, 3, 2, 4];
let arr1 = [6, 8, 0, 1, 3];

function nextGreaterElement(arr) {
  let current = 0;
  let find = current + 1;
  while (current < arr.length) {
    if (arr[current] < arr[find]) {
      arr[current] = arr[find];
      current++;
      find = current + 1;
    } else {
      find++;
    }
    if (find === arr.length) {
      arr[current] = -1;
      current++;
      find = current + 1;
    }
  }
  return arr;
}

console.log(nextGreaterElement(arr)); // [ 3, 4, 4, -1 ]
console.log(nextGreaterElement(arr1)); // [ 8, -1, 1, 3, -1 ]
