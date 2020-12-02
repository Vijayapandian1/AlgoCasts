// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//Solution 1
// function chunk(array, size) {
//     var chunkedArray = [];
   
//     for(var a of array){
//         var last = chunkedArray[chunkedArray.length - 1];
//       if(!last || last.length === size)
//           chunkedArray.push([a]);
//        else
//            last.push(a);
//     }
//     console.log(chunkedArray);
//     return chunkedArray;
// }

//Solution 2
function chunk(array, size) {
    var chunked = [];
    var index = 0;

    while(index < array.length);
    {
        chunked.push(array.slice(index, index+size));
        index += size;
    }
    return chunked;
}
module.exports = chunk;
