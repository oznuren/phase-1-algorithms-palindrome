function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* Pseudocode:
  Take the word as an argument
  Create a variable to hold the reversed word
  Reverse the word
  Compare the reversed word to the original word
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
