const strs = ["flower","flow","flight"]
// "flight"
// Output: "fl"
// If empty return "" string

function longestCommonPrefix(str) {
  let longest = ""
  let templongest = ""
  let changingCompare = str[0]
  if (str.length === 1) {
    return str[0]
  }
  for (let i = 1; i < str.length; i++) {
    currCompare = str[i]
    for (let j = 0; j < currCompare.length; j++) {
      if (currCompare[j] === changingCompare[j]) {
        templongest += currCompare[j]
      }
      else {
        break
      }
    }
    longest = templongest
    changingCompare = templongest
    templongest = ""
  }
  return longest
}

console.log(longestCommonPrefix(strs)) 

