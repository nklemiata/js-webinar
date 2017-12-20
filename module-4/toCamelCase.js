'use strict';
const CHARACTERS_TO_KEEP = "0123456789qwertuiopasdfghjklzyxcvbnm";
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
    if (typeof toConvert !== 'string') {
        return '';
    }

    //log
    const tmp = toConvert.split(' ');
    console.log(JSON.stringify(tmp));
    return tmp.join('');

    return toConvert
        .split(' ')
        .map(word => word
            .split('')
            .filter(char => CHARACTERS_TO_KEEP.indexOf(char.toLowerCase()) !== -1)  //Returns -1 if the item is not found.
            .join('')
        )
        .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
        .join('');
    console.log(JSON.stringify(word));
}
module.exports = toCamelCase;