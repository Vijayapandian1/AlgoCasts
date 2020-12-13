// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//My Solution
/*
function fib(n) {
    var previous = 1;
    var previousOfPRevious = 1;
    var current = 0;
    for(var i=0; i <= n; i++){
      if(i < 2){
          current = i;
      }
      else if(i == 2){
      	current = 1;
      }
      else{
          var current = previousOfPRevious + previous;
          previousOfPRevious = previous;
          previous = current;
      }
    }
    return current;
}
*/
//Solution 1
/*
function fib(n) {
        let array = [0,1];

        for(let i=2; i<=n;i++){
            array.push(array[array.length-1]+array[array.length-2]);
        }

        return array[n];
}
*/
// My Solution Recursive
/*
function fib(n, array = [0,1]){
    if(array.length - 1 === n || n < 2){
        return array[n];
    }

    let r = array[array.length-1]+array[array.length-2];
    array.push(r);
    return fib(n,array);

}
*/
//Solution 2    Recursive
function fib(n){
    if(n < 2)
    return n;

    return fib(n - 1) + fib(n -2);
}

module.exports = fib;
