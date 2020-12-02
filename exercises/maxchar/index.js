// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//My Solution 

function maxChar(str) {
    let chars = {};
    var maxCount  = 0;
    var mChar = '';
    
    for(let char of str){
         chars[char] = chars[char]+1 || 1;
         if(chars[char] > maxCount) { 
         		maxCount = chars[char];
            mChar = char;
         }
    }
    return mChar;
}

module.exports = maxChar;
