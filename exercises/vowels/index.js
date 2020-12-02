// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//My Solution
/*
function vowels(str) {
    let vowel = ['a','e','i','o','u'];
  
    let count = 0;
    for(let char of str.toLowerCase()){
            count += (vowel.includes(char)) && 1;
    }
    return count;
}
*/
//Solution 2  RegExp
function vowels(str) {
	let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
module.exports = vowels;
