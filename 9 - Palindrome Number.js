const x = 123

function isPalindrome(x) {
  let reversed = ""

  for (let i = 0 ; i < x.toString().length; i++) {
    reversed = x.toString()[i] + reversed
    revNum = Number(reversed)
  }
  return (x === revNum) ? true :  false
}

console.log(isPalindrome(x)) 
