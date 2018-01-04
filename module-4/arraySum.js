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
  for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (Array.isArray(value)) {
      flatten(value, result);
      } else {
        result.push(value);
      //console.log(result);
      }
  }
  return result;
  }

  // verify numbers
 function isNumber(flatValue){
   if (typeof(flatValue) == 'number') {
     return true;
   } else
     return false;
 };

 // sum up the number in array
 function arraySum(elements) {
    if (!Array.isArray(elements)) {
        return 0;
    }
      let sum = 0;
      let flat = flatten(elements)
      .filter(value => { return isNumber(value)}) 
      console.log(flat);
      for (let x=0; x < flat.length; x++) {
        sum += flat[x];
      }
      return sum;   
   }

 module.exports = arraySum;