//array = [5,10,3,2,50,80]
//B = 45
function twoDiff(array, B) {
  array.sort((a, b) => {
    return b - a;
  });
  let i = 0;
  let targetNum;
  let index_Map = new Map();
  for (i = 0; i < array.length - 1; i++) {
    if (array[i] > B) {
      targetNum = array[i] - B;
    } else {
      targetNum = B + array[i];
    }

    if (index_Map.has(targetNum)) {
      console.log(array[i], targetNum);
      return 1;
    } else {
      index_Map.set(array[i], i);
    }
  }
  return 0;
}
console.log(twoDiff([5, 10, 3, 2, 50, 80], 45));
