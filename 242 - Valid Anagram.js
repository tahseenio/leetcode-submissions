/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
  // if t is an anagram of s then return true
  // if t is not an anagram of s then return false
  // anagram of t is a word that contains all letters of s
  // compare first letter of t to indexof letter in s and if it doesnt exist just return false
  // if letter does exist then continue and remove the letter from t
  if (t.length !== s.length) return false
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) === -1) return false
    t = t.replace(s[i], '')
  }
  if (t === "") return true
}

//  console.log(isAnagram(s, t))