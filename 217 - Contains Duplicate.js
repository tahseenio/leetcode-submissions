const nums = [1, 2, 2, 2, 3, 4];
//Output: true

function containsDuplicate(nums) {
  console.log(new Set(nums).size);
  if (nums.length === new Set(nums).size) {
    return false;
  } else {
    return true;
  }
}

console.log(containsDuplicate(nums));
