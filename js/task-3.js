function findLongestWord(string = '') {
  const array = string.split(' ');
  let theLongestWord = array[0];
  // for (let i = 0; i < array.length; i += 1) {
  //   if (array[i].length > theLongestWord.length) {
  //     theLongestWord = array[i];
  //   }
  // }
  for (const word of array) {
    if (word.length > theLongestWord.length) {
      theLongestWord = word;
    }
  }
  return theLongestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
