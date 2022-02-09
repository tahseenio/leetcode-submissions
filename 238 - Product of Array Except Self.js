const nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(nums) {
  //loop through and multiply everything except itself and push into new arr
  // loop through it all and return arr
  let answer = [];
  let left = new Array(nums.length).fill(0);
  left[0] = 1;

  let right = new Array(nums.length).fill(0);
  right[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let j = right.length - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }

  for (let k = 0; k < nums.length; k++) {
    answer[k] = left[k] * right[k];
  }
  return answer;
}

console.log(productExceptSelf(nums));
