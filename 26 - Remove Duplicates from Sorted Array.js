nums = [0,0,1,1,1,2,2,3,3,4]

// function removeDuplicates(nums) {
//   return Array.from(new Set(nums))
// }

nums = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates(nums) {
  for (let i=0; i < nums.length; i ++) {
      if (nums[i] === nums[i+1]) {
        nums.splice(i,1)
        i--
      }
  }
  return nums
}

console.log(removeDuplicates(nums))