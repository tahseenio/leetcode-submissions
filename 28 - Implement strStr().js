Input: haystack = "aaaaa", needle = "bba"
// Output: 2

var strStr = function(haystack, needle) {
  if (haystack === needle) return 0
  if (haystack.length === 0 && needle.length >= 1) return -1

  for (let i = 0 ; i < haystack.length; i++) {
    return haystack.indexOf(needle)
  }
};



console.log(strStr(haystack, needle))


