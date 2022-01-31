const sample = [
  [1, 5],
  [7, 3],
  [3, 5],
];

function highestNumber(accounts) {
  let highest = 0;
  for (let i = 0; i < accounts.length; ++i) {
    if (accounts[i].reduce((sum, value) => sum + value, 0) > highest) {
      console.log(highest);
      console.log(accounts[i].reduce((sum, value) => sum + value, 0));
      highest = accounts[i].reduce((sum, value) => sum + value, 0);
    } else {
      return highest;
    }
  }
  return highest;
}

console.log(highestNumber(sample));
