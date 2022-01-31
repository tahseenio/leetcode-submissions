nums = [3, 2, 4];
target = 6;

function sumFunction(nums, target) {
  let index = [];
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        index.push(i);
        index.push(j);
      }
    }
  }
  return index;
}

console.log(sumFunction(nums, target));
