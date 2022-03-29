// digits = [1,2,3]
// digits = [4, 3, 2, 8, 9]
// [4, 3, 2, 9, 0]
digits = [
  5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2,
  5, 8, 9,
];

function plusOne(arr) {
  return (BigInt(arr.join('')) + 1n).toString().split('').map(Number);
}

console.log(plusOne(digits));


module.exports = plusOne 