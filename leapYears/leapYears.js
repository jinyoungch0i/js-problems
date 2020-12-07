/* Leap years are years divisible by four (like 1984 and 2004).
However, years divisible by 100 are not leap years (such as 1800 and 1900)
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
(Yes, it's all pretty confusing) */


//to break this problem down,
// i used a flowchart diagram to wrap my head around the logic.
//top suggested the use of && operators, but were not necessary :)

const leapYears = function(year) {

    if (year % 4 === 0) {

        if (year % 100 === 0) {

            if (year % 400 === 0) {
                return true; // if year is cleanly divisible by (4) and by (100 AND 400)
            }
            else {
                return false; // if year is cleanly divisible by (4) and by (100) but NOT by (400)
            }

        }
    return true // if year = cleanly divisible by 4
    }
    else {
        return false; // if year != cleanly divisible by 4
    }
}

module.exports = leapYears

//examples
console.log(leapYears(2000));
console.log(leapYears(1600));
