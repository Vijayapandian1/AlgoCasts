// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution 1
// function reverse(str) {
//     var a = str.split('');
//     var b = [];
//     for(var i = a.length;i>=0;i--){
//         b.push(a[i]);
//     }
//     return b.join('');
// }

//Solution 2
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

//Solution 3
// function reverse(str) {
//     var reversed = '';
//     for(let char of str){
//         reversed = char + reversed;
//     }
//     return reversed;
// }

//Solution 4
function reverse(str) {
    return str.split('').reduce((reversed, char) =>  char + reversed ,'');
}

module.exports = reverse;
