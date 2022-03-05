// Input: nums = [1,3,5,6], target = 5
// // Output: 2

// Input: nums = [1,3,5,6], target = 7
// // Output: 2


var searchInsert = function(nums, target) {
  if (nums.indexOf(target) !== -1) return nums.indexOf(target)
  if (target < nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
    if (target > nums[i] && target < nums[i+1]) {
      return i + 1
    }
  }
};


console.log(searchInsert(nums,target))