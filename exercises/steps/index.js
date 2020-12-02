// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//My Solution
/*
function steps(n) {
    let current = 1;
    let res = '';
		while(current <= n){
    		res = '';
        for(let z = 0; z < current; z ++){
        	res += '#';
        }
        for(let a = current; a < n; a++){
        		res += ' ';
        	}
        console.log(res);
        current += 1
    }
}
*/

//Solution 1
/*
function steps(n) {
    for(let row = 0; row < n; row++){
        let stairs = '';
        for(let column = 0; column < n; column++){
            if(row >= column)
                stairs += '#';
            else
                stairs += ' ';
        }
        console.log(stairs);
    }
}
*/
//Solution 2 Recursion
function steps(n, row = 0, stairs = ''){
    if(n === row){
        return;
    }

    if(n === stairs.length){
        console.log(stairs);
        return steps(n, row + 1); // No need to pass stairs it will be empt by default for te next row
    }

    if(row >= stairs.length)
        stairs += '#';
    else
        stairs += ' ';
        steps(n,row,stairs);
}
module.exports = steps;
