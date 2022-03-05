nums = [3,2,2,3]
val = 3

var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      console.log(nums[i])
      nums.splice(i,1)
      i--
    }
  }
};

console.log(removeElement(nums,val))