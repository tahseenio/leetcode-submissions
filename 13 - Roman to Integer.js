const s = "MCMXCVI"

function romanToInt(s) {
  const key = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
  }
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let currInt = key[s[i]]
    let nextInt = key[s[i+1]]
    
    if (nextInt) {
      if (currInt >= nextInt) {
        sum += currInt
      }
      else {
        sum += (nextInt - currInt)
        i++
      }
    } else {
      sum += currInt
    }
  }
  return sum
}

console.log(romanToInt(s)) 