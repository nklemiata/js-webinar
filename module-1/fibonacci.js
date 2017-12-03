'use strict';

/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 1)
 * @returns {number}
 * @throws {Error} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    // -------------- Variant 1 ----------------------------------
    if (n<0) {
        return nThFibonacci=0;
    }
    else if (n<2) {
        return nThFibonacci=n;
    } else {
        n=fibonacci(n-1) + fibonacci(n-2)
        }
        nThFibonacci=n;


/*
    //------- Variant 2 - without recursion ------
    if (n<0) {
        return nThFibonacci=0;
    }
    else if (n<2) {
        return nThFibonacci=n;
    } else {
        var a = 1, b = 1;
        for (var i = 3; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;
        }
        return nThFibonacci=b;
    }
*/
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;