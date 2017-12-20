'use strict';
/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

 function longestString(textArr){
    if (!textArr.isArray) {
        return '';
    }

    let longest = textArr.reduce(function(longest, current) {
        if(current.length > longest.length)
           return current;
        else
        return longest;
      });
    return longest;  
 };
