/* lessons learnt:

-toFixed returns a string, not a number.
Math.round should be used if further arithmatic computation is required.

-in order to customise the decimal points of the returned Math.round() value:
e.g. rounding 3.243 to two decimal places = Math.round(3.243 * 100) / 100 .
e.g.2 rounding 2.196 to one decimal place = Math.round(2.196 * 10) / 10 .


*/


const ftoc = function(fahrenheit) {

    const celc = (fahrenheit - 32) / (9/5);
    if (celc % 1 === 0) {
        return Math.round(celc);
    }
    else {
       return Math.round(celc * 10) / 10;
    }

}

const ctof = function(celc) {

    const fahr = ((celc * (9/5)) + 32);
    if (fahr % 1 === 0) {
        return Math.round(fahr);
    }
    else {
        return Math.round(fahr * 10) / 10;
    }

}

module.exports = {
  ftoc,
  ctof
}

console.log(ftoc(32))
console.log(ftoc(100))
console.log(ftoc(-100))
console.log("------")
console.log(ctof(0))
console.log(ctof(73.2))
console.log(ctof(-10))
