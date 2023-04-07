// Task 1
console.groupCollapsed('Task 1'); //! Log group name

//! Task conditions
// Complete the method that takes a boolean value and return a "Yes" string for "true", or a "No" string for "false".

//! Task solution
function boolToWord( bool ){
    const messege = bool === true ? 'Yes' : 'No';
    return messege;  
};

//! Check test
console.log('"boolToWord(true)" =>', boolToWord(true));
console.log('"boolToWord(false)" =>', boolToWord(false));

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


// Task 2
console.groupCollapsed('Task 2'); //! Log group name

//! Task conditions
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//! Task solution
function century(year) {
    let century = 1;
    if (year > 100 && year % 100 === 0) {
        century = year / 100;
    } else {
        century = Math.floor(year / 100) + 1;
    };
    return century;
};

//! Check test
console.log('"century(1705)" =>', century(1705));
console.log('"century(1900)" =>', century(1900));
console.log('"century(1601)" =>', century(1601));
console.log('"century(2000)" =>', century(2000));
console.log('"century(89)" =>', century(89));

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


// Task 3
console.groupCollapsed('Task 3'); //! Log group name

//! Task conditions
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

//! Task solution
function booleanToString(b){
    return b === true ? 'true' : 'false';
};

//! Check test
console.log('"booleanToString(true)" =>', booleanToString(true));
console.log('"booleanToString(false)" =>', booleanToString(false));

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


// Task 4
console.groupCollapsed('Task 4'); //! Log group name

//! Task conditions
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:
// 1: -1
// 14: -14
// -34: 34

//! Task solution
function opposite(number) {
    let oppositeNum;
    if (number < 0 || number === 0) {
        oppositeNum = Math.abs(number);
    } else {
        oppositeNum = +`-${number}`;
    };
    return oppositeNum;
};

//! Check test
console.log('"opposite(1)" =>', opposite(1)); // => -1
console.log('"opposite(0)" =>', opposite(0)); // => 0
console.log('"opposite(4.25)" =>', opposite(4.25)); // => -4.25
console.log('"opposite(3.3333333)" =>', opposite(3.3333333)); // => -3.3333333
console.log('"opposite(-12525220.3325)" =>', opposite(-12525220.3325)); // => 12525220.3325
console.log('"opposite(-5)" =>', opposite(-5)); // => 5

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');


// Task 5
console.groupCollapsed('Task 5'); //! Log group name

//! Task conditions
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//! Task solution
function rentalCarCost(d) {
    let disc = 0;
    if (d >= 3 && d < 7) {
        disc = 20;
    } else if (d >= 7) {
        disc = 50;
    };
    return d * 40 - disc;
};

//! Check test
console.log('"rentalCarCost(1)" =>', rentalCarCost(1)); // => 40
console.log('"rentalCarCost(2)" =>',rentalCarCost(2)); // => 80

console.log('"rentalCarCost(3)" =>',rentalCarCost(3)); // => 100
console.log('"rentalCarCost(4)" =>',rentalCarCost(4)); // => 140
console.log('"rentalCarCost(5)" =>',rentalCarCost(5)); // => 180
console.log('"rentalCarCost(6)" =>',rentalCarCost(6)); // => 220

console.log('"rentalCarCost(7)" =>',rentalCarCost(7)); // => 230
console.log('"rentalCarCost(8)" =>',rentalCarCost(8)); // => 270
console.log('"rentalCarCost(9)" =>',rentalCarCost(9)); // => 310
console.log('"rentalCarCost(10)" =>',rentalCarCost(10)); // => 350

console.groupEnd(); //! Log group end
console.log('-5----------------------------------------------');


// Task 6
console.groupCollapsed('Task 6'); //! Log group name

//! Task conditions
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

//! Task solution
function litres(time) {
    const totalVolume = time < 2 ? 0 : Math.floor(time / 2);
    return totalVolume;
};

//! Check test
console.log('"litres(0)" =>', litres(0)); // => 0
console.log('"litres(0.82)" =>', litres(0.82)); // => 0
console.log('"litres(1.4)" =>', litres(1.4)); // => 0
console.log('"litres(2)" =>', litres(2)); // => 1
console.log('"litres(11.8)" =>', litres(11.8)); // => 5
console.log('"litres(12.3)" =>', litres(12.3)); // => 6
console.log('"litres(1787)" =>', litres(1787)); // => 893

console.groupEnd(); //! Log group end
console.log('-6----------------------------------------------');

// Task 7
console.groupCollapsed('Task 7'); //! Log group name

//! Task conditions
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:
// 1 <= month <= 12

//! Task solution
const quarterOf = (month) => {
    let quarter = 1;
        if (month > 3 && month < 7) {
            quarter = 2;
        } else if (month > 6 && month < 10) {
            quarter = 3;
        } else if (month > 9) {
            quarter = 4;
        };
    return quarter;
};

//! Check test
console.log('"quarterOf(3)" =>', quarterOf(3)); // => 1
console.log('"quarterOf(8)" =>', quarterOf(8)); // => 3
console.log('"quarterOf(3)" =>', quarterOf(11)); // => 4

console.groupEnd(); //! Log group end
console.log('-7----------------------------------------------');


// Task 8
console.groupCollapsed('Task 8'); //! Log group name

//! Task conditions
// Code as fast as you can! You need to double the integer and return it.

//! Task solution
function doubleInteger(i) {
  return i * 2;
}

//! Check test
console.log('"doubleInteger(2)" =>', doubleInteger(2)); // => 4

console.groupEnd(); //! Log group end
console.log('-8----------------------------------------------');


// Task 9
console.groupCollapsed('Task 9'); //! Log group name

//! Task conditions
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :
    // - If Alex gets 10 or more hoops, return the string "Great, now move on to tricks";
    // - If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//! Task solution
function hoopCount (n) {
    return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
};

//! Check test
console.log('"hoopCount(3)" =>', hoopCount(3)); // => "Keep at it until you get it"
console.log('"hoopCount(11)" =>', hoopCount(11)); // => "Great, now move on to tricks"

console.groupEnd(); //! Log group end
console.log('-9----------------------------------------------');


// Task 10
console.groupCollapsed('Task 10'); //! Log group name

//! Task conditions
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//! Task solution
function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
};

//! Check test
console.log('removeExclamationMarks("Hello World!") =>', removeExclamationMarks("Hello World!")); // => "Hello World"

console.log('removeExclamationMarks("Hello World!!!") =>', removeExclamationMarks("Hello World!!!")); // => "Hello World"

console.groupEnd(); //! Log group end
console.log('-10---------------------------------------------');


// Task X
// console.groupCollapsed('Task X'); //! Log group name
//! Task conditions
//! Task solution
//! Check test
// console.groupEnd(); //! Log group end
// console.log('-X----------------------------------------------');