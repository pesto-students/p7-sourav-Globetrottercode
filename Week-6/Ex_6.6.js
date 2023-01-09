// 3 Sum Pesto
let S = [-1, 2, 1, -4];
let T = 1;
function three_Sum(S, T) {
  S.sort((a, b) => {
    return a - b;
  });
  let i = 0,
    l,
    r;
  let c = 0;
  let diff = 0;
  let minDiff = 0;
  let sum = 0;
  let nearestSum;
  for (i = 0; i < S.length; i++) {
    if (i > 0 && S[i] == S[i - 1]) {
      continue;
    }
    l = i + 1;
    r = S.length - 1;
    while (l < r) {
      c++;
      sum = S[i] + S[l] + S[r];
      if (sum > T) {
        r = r - 1;
        diff = sum - T;
      } else if (sum < T) {
        l = l + 1;
        diff = T - sum;
      } else if (sum === T) {
        return [sum, [S[i], S[l], S[r]]];
      }
      if (c === 1) {
        minDiff = diff;
      }
      if (diff <= minDiff) {
        minDiff = Math.min(minDiff, diff);
        nearestSum = sum;
      }
    }
  }
  return nearestSum;
}
console.log(three_Sum(S, T));
