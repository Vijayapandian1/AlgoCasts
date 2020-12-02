// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//MySolution
// function reverseInt(n) {
//     var sign = Math.sign(n) < 0 ? '-':'';
//    return parseInt(sign + n.toString().split('').reverse().join('')) ;
// }


//Solution 1

function reverseInt(n) {
   return  parseInt(n.toString().split('').reverse().join(''))   * 
   Math.sign(n);
}


module.exports = reverseInt;
