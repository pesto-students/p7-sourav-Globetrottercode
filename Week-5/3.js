//Exercise 5.3

const a = [2, 3, 4, 5, 6, 7, 8, 8, 6, 5, 2, 4]; // Array with Duplicates
const b = [1, 2, 3, 4, 5, 6]; // Array with duplicates

function hasDuplictate(arr) {
  const isSet = new Set(arr);
  if (arr.length === isSet.size) {
    console.log("Does not have duplicates");
    return false;
  } else {
    console.log("It has duplicates");
    return true;
  }
}

console.log(hasDuplictate(a));
console.log(hasDuplictate(b));
