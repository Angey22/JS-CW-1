// Task 1 - Disemvowel Trolls
console.groupCollapsed('Task 1 - Disemvowel Trolls'); //! Log group name

//! Task conditions
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata "y" isn't considered a vowel, need to be removed: «A», «E», «I», «O», «U».

//! Task solution
function disemvowel(str) {
    let newStr = str;

    const arr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    
    for (let i = 0; i <= arr.length - 1; i += 1) {
        newStr = newStr.replaceAll(arr[i], '');
    };
  return newStr;
};

//! Check test
console.log(`disemvowel("This website is for losers LOL!") =>`, disemvowel("This website is for losers LOL!")); // => "Ths wbst s fr lsrs LL!"

console.log(`disemvowel("No offense but,\nYour writing is among the worst I've ever read") =>`, disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // => "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"

console.log(`disemvowel("What are you, a communist?") =>`, disemvowel("What are you, a communist?")); // => "Wht r y,  cmmnst?"

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


// Task 2 - Beginner Series #2 Clock
console.groupCollapsed('Task 2 - Beginner Series #2 Clock'); //! Log group name

//! Task conditions
// Clock shows "h" - hours, "m" - minutes and "s" - seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0 (1 h = 3600000 ms)
// m = 1 (1 m = 60000 ms)
// s = 1 (1 s = 1000 ms)

// result = 61000

//! Task solution
function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
}

//! Check test
console.log('"past(0, 1, 1)" =>', past(0, 1, 1)); // => 61000
console.log('"past(1,1,1)" =>', past(1,1,1)); // => 3661000
console.log('"past(0,0,0)" =>', past(0,0,0)); // => 0
console.log('"past(1,0,1)" =>', past(1,0,1)); // => 3601000
console.log('"past(1,0,0)" =>', past(1,0,0)); // => 3600000

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


// Task 3 - Thinkful - Logic Drills: Traffic light
console.groupCollapsed('Task 3 - Thinkful-Logic Drills: Traffic light'); //! Log group name

//! Task conditions
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


//! Task solution
function updateLight(current) {
    switch (current) {
        case 'green': return 'yellow';
        case 'yellow': return 'red';
        case 'red': return 'green';
    };
};

//! Check test
console.log(updateLight("green")); // => "yellow"
console.log(updateLight("yellow")); // => "red"
console.log(updateLight("red")); // => "green"

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


// Task 4 - Exes and Ohs
console.groupCollapsed('Task 4 - Exes and Ohs'); //! Log group name

//! Task conditions
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input / output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//! Task solution
function XO(str) {
    const lowStr = str.toLowerCase();
    let xNam = 0;
    let oNam = 0;
    if (lowStr.includes('x') || lowStr.includes('o')) {
        
        for (let i = 0; i < lowStr.length; i += 1) {
            if (lowStr[i] === 'x') xNam += 1;
            if (lowStr[i] === 'o') oNam += 1;
        }

        if (xNam === oNam) {
            return true;
        } else {
            return false;
        }

    } else {
        return true;
    };
};

//! Check test
console.log('XO("xo") =>', XO('xo')); // => true
console.log('XO("xxOo") =>', XO("xxOo")); // => true
console.log('XO("xxxm") =>', XO("xxxm")); // => false
console.log('XO("Oo") =>', XO("Oo"));  // => false
console.log('XO("ooom") =>', XO("ooom"));  // => false

console.log('XO("zpzpzpp") =>', XO("zpzpzpp"));  // => true

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');


// Task 5 - Get the Middle Character
console.groupCollapsed('Task 5 - Get the Middle Character'); //! Log group name

//! Task conditions
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

//! Task solution
function getMiddle(s) {
    const strMiddle = s.length / 2 - 1;
    let newStr = '';

    if (s.length % 2 === 0) {

        for (let i = 0; i < 2; i += 1) {
            newStr += s[strMiddle + i];
        }
        
    } else {
        newStr += s[Math.round(strMiddle)];
    };
    
    return newStr;
};

//! Check test
console.log('getMiddle("test") =>', getMiddle("test")); // => "es"
console.log('getMiddle("testing") =>', getMiddle("testing")); // => "t"
console.log('getMiddle("middle") =>', getMiddle("middle")); // => "dd"
console.log('getMiddle("A") =>', getMiddle("A")); // => "A"

console.groupEnd(); //! Log group end
console.log('-5----------------------------------------------');


// Task 6 - Mumbling
console.groupCollapsed('Task 6 - Mumbling'); //! Log group name

//! Task conditions
// The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a...z and A...Z.

//! My task solution
function accum(s) {
    let accumString = `${s[0].toUpperCase()}`;
    let subString = '';

    for (let i = 1; i < s.length; i += 1) { 

        subString = `-${s[i].toUpperCase()}`;

        if (i > 0) {

            for (let j = 0; j < i; j += 1) {
                subString += `${s[i].toLowerCase()}`;
            };
            
        };

        accumString += subString;
    };

    return accumString;
};

//! Code refactoring from ChatGPT
// function accum(s) {
//   let str = s.toLowerCase();
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result += str[i].toUpperCase() + str[i].repeat(i) + "-";
//   }

//   return result.slice(0,-1);
// };

//! Check test
console.log('accum("abcd") =>', accum("abcd")) // => "A-Bb-Ccc-Dddd"

console.log('accum("ZpglnRxqenU") =>', accum("ZpglnRxqenU")); // => "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

console.log('accum("NyffsGeyylB") =>', accum("NyffsGeyylB")); // => "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"

console.log('accum("MjtkuBovqrU") =>', accum("MjtkuBovqrU")); // => "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"

console.log('accum("EvidjUnokmM") =>', accum("EvidjUnokmM")); // => "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"

console.log('accum("HbideVbxncC") =>', accum("HbideVbxncC")); // => "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"

console.groupEnd(); //! Log group end
console.log('-6----------------------------------------------');


// Task 7 - If you can't sleep, just count sheep!
console.groupCollapsed("Task 7 - If you can't sleep, just count sheep!"); //! Log group name

//! Task conditions
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//! Task solution
function countSheep(num) {
    let str = '';
    for (let i = 1; i <= num; i++) { 
        str += `${i} sheep...`
    }
    return str;
};

//! Check test
console.log('countSheep(0) =>', countSheep(0)); // => ''
console.log('countSheep(1) =>', countSheep(1)); // => '1 sheep...'
console.log('countSheep(2) =>', countSheep(2)); // => '1 sheep... 2 sheep...'
console.log('countSheep(3) =>', countSheep(3)); // => '1 sheep... 2 sheep... 3 sheep...'


console.groupEnd(); //! Log group end
console.log('-7----------------------------------------------');


// Task 8 - Grasshopper - Personalized Message
console.groupCollapsed('Task 8 - Grasshopper - Personalized Message'); //! Log group name

//! Task conditions
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case	              ->      return
// name equals owner  ->	'Hello boss'
// otherwise	      ->    'Hello guest'

//! Task solution
function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'; 
};

//! Check test
console.log("greet('Daniel', 'Daniel') =>", greet('Daniel', 'Daniel')); // => 'Hello boss'

console.log("greet('Greg', 'Daniel') =>", greet('Greg', 'Daniel')); // => 'Hello guest'

console.groupEnd(); //! Log group end
console.log('-8----------------------------------------------');


// Task 9 - Remove String Spaces
console.groupCollapsed('Task 9 - Remove String Spaces'); //! Log group name

//! Task conditions
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

//! Task solution
function noSpace(x){
    return x.split(' ').join('');
};

//! Check test
console.log("noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') =>", noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // => '8j8mBliB8gimjB8B8jlB'

console.log("noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') =>", noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // => '88Bifk8hB8BB8BBBB888chl8BhBfd'

console.log("noSpace('8aaaaa dddd r     ') =>", noSpace('8aaaaa dddd r     ')); // => '8aaaaaddddr'

console.groupEnd(); //! Log group end
console.log('-9----------------------------------------------');


// Task 10 - Highest and Lowest
console.groupCollapsed('Task 10 - Highest and Lowest'); //! Log group name

//! Task conditions
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
    // - all numbers are valid Int32, no need to validate them;
    // - there will always be at least one number in the input string;
    // - output string must be two numbers separated by a single space, and highest number is first.

//! Task solution
function highAndLow(numbers){
    const strNum = numbers.split(' ');
    const strMax = Math.max(...strNum);
    const strMin = Math.min(...strNum);
    return `${strMax} ${strMin}`;
};

//! Check test
console.log('highAndLow("1 2 3 4 5") =>', highAndLow("1 2 3 4 5")); // => "5 1"

console.log('highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") =>', highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // => "42 -9"

console.log('highAndLow("1 2 3") =>', highAndLow("1 2 3")); // => "3 1"

console.groupEnd(); //! Log group end
console.log('-10---------------------------------------------');


// Task X
// console.groupCollapsed('Task X'); //! Log group name
//! Task conditions
//! Task solution
//! Check test
// console.groupEnd(); //! Log group end
// console.log('-X----------------------------------------------');