'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */


 
 function longestString(input){
    if (!Array.isArray(input)) {  
        return '';
    }
    
    return longestString
        .filter(strings => typeof strings === 'string')
        .sort((a, b) => (b - a))
        .reduce(function(longest, current) {
            if(current.length > longest.length)
               return current;
            else
            return longest;
          })

};

    /*let stringsOnly = input.filter(inputStrings => {typeof input[] == "string";
    });
    console.log(stringsOnly);

    let longest = stringsOnly.reduce(function(longest, current) {
        if(current.length > longest.length)
           return current;
        else
        return longest;
      });
    return longest;  
 };*/

 module.exports = longestString;
