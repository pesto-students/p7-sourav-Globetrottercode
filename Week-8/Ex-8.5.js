trust1 = [[1, 2]];
trust2 = [
  [1, 3],
  [2, 3],
];
trust3 = [
  [1, 3],
  [2, 3],
  [3, 1],
];

function findTownJudge(n, trust) {
  let a = new Array(n + 1).fill(0);
  for (edge of trust) {
    a[edge[0]]--;
    a[edge[1]]++;
  }
  for (i = 0; i < a.length; i++) {
    if (a[i] === n - 1) {
      return i;
    }
  }
  return -1;
}

console.log(findTownJudge(2, trust1));
console.log(findTownJudge(3, trust2));
console.log(findTownJudge(3, trust1));
