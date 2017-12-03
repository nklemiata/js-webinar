'use strict';

/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    // -------------- Variant 1 ----------------------------------
    /*
    if (score <0 || score > 100) {
        return 0;
    }
    var a;
    if (score >= 90) {
        return a=5;
    } else if (score >= 80) {            
        return a=4;
    } else if (score >= 70) {
        return a=3;
    } else if (score >= 60) {
        return a=2
    } else if (score >= 0) {
        return a=1
    }
    gradeOfStudent = a;   
    */
// -------------- Variant 2 ----------------------------------
    if (score <0 || score > 100) {
        return 0;
    } 
    else if (60 <= score && score <= 100) {
        gradeOfStudent = [1, 2, 3, 4, 5, 5]; 
        return +gradeOfStudent[parseInt((score - 50) / 10)];
    }
    else 
    return gradeOfStudent=1;

    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;