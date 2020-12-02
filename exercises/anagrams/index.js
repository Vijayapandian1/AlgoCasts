// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//My solutions
/*
function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g,'').toLowerCase();
    stringB = stringB.replace(/[^\w]/g,'').toLowerCase();
    
    if(stringA.length != stringB.length)
    	return false;
    
    let charMapA = {}; let charMapB = {};
    for(let char of stringA){
    	charMapA[char] = charMapA[char]+1 || 1;
    }
    
    for(let char of stringB){
    	charMapB[char] = charMapB[char]+1 || 1;
    }
    
    for(let char in charMapA){
    	 if(charMapA[char] != charMapB[char])
       		return false;
    }
    
    return true;
}
*/

//Solution 1
/*
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
    for(let char in aCharMap){
        if(aCharMap[char] != bCharMap[char]){
            return false;
        }
    }
    return true;
}

function buildCharMap(str){
    let charMap = {};
    for(let char of str.replace(/[A-Z][a-z][0-9]/g,'').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
*/

//Solution 2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str){
    return str.replace(/[^\w]/g,'').split('').sort().join('').toLowerCase();
}
module.exports = anagrams;
