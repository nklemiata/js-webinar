'use strict';
/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */


// flatten nested array:
function flatten(arr, result = []) {
    for (let i = 0, length = arr.length; i < length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
        flatten(value, result);
        } else {
        result.push(value);
        }
    }
    return result;
    };

 function onlyNumbers(flatValue){
   if (flatValue.isNumber) {
     return true;
   } else
     return false;
 };

 function arraySum(elements) {
    if (!Array.isArray()) {
        return 0;
    }
      for (let x=0, length = elements.length, x < length, x++) {
        const value = arr[i];
        return elements += arraySum.value
        .map(flatten)
        .filter(value => onlyNumbers) 
      }
         
   }
/*
test here: https://codepen.io/w3resource/pen/jGLepN?editors=0010 

console.log(flatten([1, 2, [[[[[3]], [4, [[[["12", 2]]]]]]]]]));
console.log(onlyNumbers(flatten([1, 2, [[[[[3]], [4, [[[["12", 2]]]]]]]]])));
console.log(arraySum([1, 2, "3", 4, false, 6]));
console.log(arraySum([1, 2, [[[[[3]], [4, [[[["12", 2]]]]]]]]]));
*/

 module.exports = arraySum;