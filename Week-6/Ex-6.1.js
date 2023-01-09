function maxSubArray(nums) {
  let n = nums.length;
  let start = 0,
    end = 0;
  let maxSoFar = nums[0],
    maxEndingHere = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] > maxEndingHere + nums[i]) {
      start = i;
      maxEndingHere = nums[i];
    } else {
      maxEndingHere = nums[i] + maxEndingHere;
    }
    if (maxSoFar < maxEndingHere) {
      end = i;
      maxSoFar = maxEndingHere;
    }
  }
  console.log(start, end, maxSoFar);
}

let nums = [1, 2, 4, -2, 5];
maxSubArray(nums);
