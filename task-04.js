'use strict';
function findLongestWord(string) {
  const array = string.split(" ");
  let numOfLongestWord = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].split("").length > array[numOfLongestWord].split("").length) {
      numOfLongestWord = i;
    }
  }
  console.log(array[numOfLongestWord]);
}
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");
