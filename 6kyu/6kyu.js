// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// SOLUTION

function toCamelCase(str){
return str.replace(/[_-]/g, " ").split(" ").map((word,idx) => {
       
    return idx === 0 ? word: word[0].toUpperCase() + word.slice(1)
     
  }).join("")
}

console.log(toCamelCase("The_Stealth-Warrior"))

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function order(words){
  // ...
   const newWord =  words.split(" ");
   
   return newWord.sort((a,b) => {
     let aDD = a.match(/\d/);
     let bDD =b.match(/\d/);
     
     return aDD - bDD
   })
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  
  let pairs = []
  if (str.length % 2 !== 0) {
    str += '_';
  }
   if(str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 2) {
  
    pairs.push(str.slice(i, i + 2 ));
  }
   } 
  return pairs
}

// In this simple Kata your task is to create a function that turns a 
// string into a Mexican Wave. You will be passed a string and you must 
// return that string in an array where an uppercase letter is a person 
// standing up. 
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as
  // if it was an empty seat

  // wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
  function wave(str){
  let newArr = []
  // Code here
  for(let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
   let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    newArr.push(waveStr)
  }
return newArr
}
console.log(wave("hello"))

// A string is considered to be in title case if each word in the string is either 
// (a) capitalised (that is, only the first letter of the word is in upper case) or
//  (b) considered to be an exception and put entirely into lower case unless it is the 
//  first word, which is always capitalised.

// Write a function that will convert a string into title case, given an 
// optional list of exceptions (minor words). The list of minor words will be given as 
// a string with each word separated by a space. Your function should ignore the case of
//  the minor words string -- it should behave in the same way even if the case of the 
//  minor word string is changed.

// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that 
// must always be lowercase except for the first word in the string. The 
// JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

//  MY SOLUTION
function titleCase(title, minorWords) {
  if ( !minorWords) {
   return title.split(" ").map((word) => {
     return word.charAt(0).toUpperCase() + word.slice(1)
   }).join(" ")
 }
  const minorArray = minorWords.toUpperCase().split(" ")
  console.log(minorArray)
 
 let newTitle = title.split(" ").slice(1)
  newTitle =  newTitle.map((word) => {
     if(minorArray.includes(word.toUpperCase())) {
        
       return word.toLowerCase()
     } else {
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
     }
  })
  
 
  let capFirst = title.split(" ")[0].charAt(0).toUpperCase() + title.split(" ")[0].slice(1).toLowerCase()
  
   console.log(newTitle.unshift(capFirst))
  return newTitle.join(" ")
 
 
}


// A correct solution
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}



// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"


// Solution


function toWeirdCase(string){
  //TODO
  const newStr = string.split(" ")
  return newStr.map((word) => {
    return word.split("").map((letter,idx) => {
       if(idx % 2 === 0) {
        return letter.toUpperCase()
       } else {
         return letter.toLowerCase()
       }
    }).join("")
  }).join(" ")
}


console.log(toWeirdCase('This is a test'))

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// solution

function count(string) {
  if(string.length === 0) {
    return {}
  }
  const newObj = {};
  const newStr = string.split("")
  newStr.forEach((el) => {
    if(newObj[el]) {
    newObj[el] ++
    } else {
      newObj[el] = 1
     }
  })

   return newObj
  
}

console.log(count(""))

// returning an object
// create an empty object
// convert string to array
// iterate over the array
// need a counter to keep count of elements
// check if object has element if so add to the count
// if not update object with  new key value pair
// what i learned  with this if it doesnt exist set set the value to 1 thats the missing logic


// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

function longestRepetition(s) {
  const newArr = [];
  let currentChar = "";
  let currentCount = 0;
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentCount++;
    } else {
      currentChar = s[i];
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxChar = currentChar;
      maxCount = currentCount;
    }
  }

  newArr.push(maxChar, maxCount);
  return newArr;
}

// Example usage:
console.log(longestRepetition("aabbb")); // Output: ["b", 3]
console.log(longestRepetition("aabb")); // Output: ["a", 2]
console.log(longestRepetition("bbbaaabaaaa")); // Output: ["a", 4]

// breakdown
// Certainly! Let's go through the modified code step by step:

// 1. Initialize variables:
//    - `newArr`: An empty array to store the result.
//    - `currentChar`: A variable to keep track of the current character being iterated.
//    - `currentCount`: A variable to keep track of the count of consecutive repetitions of the current character.
//    - `maxChar`: A variable to store the character with the maximum consecutive repetitions.
//    - `maxCount`: A variable to store the count of maximum consecutive repetitions.

// 2. Iterate over the string `s` using a for loop:
//    - For each character `s[i]`:
//      - If it is the same as the `currentChar`, increment `currentCount` since it's part of the current consecutive repetition.
//      - If it is different from the `currentChar`, update `currentChar` to the new character and reset `currentCount` to 1, as a new consecutive 
//      repetition has started.
//      - Check if the `currentCount` is greater than the `maxCount`. If so, update `maxChar` with `currentChar` and `maxCount` with `currentCount`.
//       This keeps track of the character with the maximum consecutive repetitions encountered so far.

// 3. After iterating through the entire string, push `maxChar` and `maxCount` into `newArr`.

// 4. Return `newArr` as the result.

// In summary, the code iterates over the string and keeps track of the current character and its count of consecutive repetitions. It updates the
// `maxChar` and `maxCount` variables whenever it encounters a longer consecutive repetition. Finally, 
// it returns an array containing the character and count of the longest consecutive repetition found in the string.

// return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
  // Extract the first two digits from the year
  var century = Math.ceil(parseInt(year) / 100);

  // Determine the appropriate suffix based on the century
  var suffix;
  if (century >= 11 && century <= 13) {
    suffix = "th";
  } else {
    var lastDigit = century % 10;
    switch (lastDigit) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
  }

  // Concatenate the century and suffix
  return century + suffix;
}


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
  let newArr = [];
  let count = -1
  s.split("").forEach((letter) => {
      count++
    newArr.push(letter.toUpperCase() +  letter.repeat(count).toLowerCase()  )
  })
   
 
    return newArr.join("-");
 
}

console.log(accum("ZpglnRxqenU"))

// 7kyu string problem 
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


function findLongest(array){
  // code here
//  turn the number into a stirng
//   test the string lenghth
//   return the number
   return array.reduce((curr,prev) => {
      return prev.toString().length > curr.toString().length ? prev:curr
   })
}


console.log(findLongest([8, 9000, 3000]))

// 6kyu string


/* 
A pangram is a sentence that contains every single letter of the alphabet at 
least once. For example, the sentence "The quick brown fox jumps over the lazy dog" 
is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, 
False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

const string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));


// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//  8kkyu array
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0] */
function digitize(n) {
  //code here
  // reverse the string
 let newN = n.toString().split("").reverse()
  // return a new array
 return newN.map((num) => {
   return parseInt(num)
 })
}


console.log(digitize(35231))

// this is a 7kyu array problem
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// iterate over the array 
// get the length of each string
// look up the sort method 
// return a new array

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b) => {
    return a.length - b.length;
  })
};







console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))


// this is a 7kyu array problem

// as a part of this Kata, you need to create a function that when provided with a triplet, 
// returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// chatgpt correction
// The code you provided is almost correct. However, there is a small mistake in the 
// condition inside the findIndex function. Instead of returning the item itself, 
// you should return true or false based on whether the item satisfies the condition
const gimme = function (inputArray) {

  let highNum = Math.max(...triplet);
  let lowNum = Math.min(...triplet);

  return triplet.findIndex((item) => {
    // return true or false
    return item > lowNum && item < highNum;
  });
  
  };



//   Given an array of integers , Find the maximum product obtained from 
//   multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6

function adjacentElementsProduct(array) {
  // max product
  // loop through the array
  let newArr = []
  for(let i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
   

  // add each element and the adjacent element
  // push the next element to a new array
  // finally find the largest number in the new array
  
  console.log(newArr)
}

console.log(adjacentElementsProduct([1, 2, 3,7]))


// 7kyu array problem
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
function myLanguages(results) {
  let languages = Object.keys(results);
  languages = languages.filter((num) => {
     if(results[num] >= 60) {
       return num
     }
   })
    return languages.sort((a,b) => {
     return results[b] - results[a]
    })
  }

  // There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.



function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
       return arr[i];
     }
   }
   // test which has the element that im looking for
 
 }
 
 console.log(findUniq([ 1, 1, 1, 2, 1, 1]))




// 1. `arr.sort((a, b) => a - b);`: This line sorts the array `arr` in ascending 
// order. The `sort()` method takes a compare function as an argument, which is 
// used to determine the order of elements. The `(a, b) => a - b` compare 
// function sorts the elements in ascending order.

// 2. `return arr[0] == arr[1] ? arr.pop() : arr[0];`: After sorting, if the 
// first and second elements are equal, it means that the unique number is at 
// the end of the array (since all other elements are equal and grouped together). 
// In this case, it uses `arr.pop()` to remove and return the last element, which is 
// the unique number. If the first and second elements are not equal, then the unique
//  number is at the beginning of the array, so it simply returns `arr[0]`.


// Complete the method which accepts an array of integers, and returns one of the following:
//  7kyu array
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      descending = false;
    }
    if (array[i] < array[i - 1]) {
      ascending = false;
    }
  }

  if (ascending) {
    return "ascending";
  } else if (descending) {
    return "descending";
  } else {
    return "no";
  }
}
// 6kyu string problem
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str){
  str = str.split("")
  
  if(str.length % 2 === 1) {
     str.push('_')
  
   }
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i] + str[i + 1]);
  }
  
  return result;
}


console.log(solution("abcdef"))


// 7kyu string
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
 const newArr = [];
  x.split("").forEach((letter) => {
    if(letter === 'a') {
      newArr.push("b")
    }else if( letter === "b") {
      newArr.push("a")
    } else if(letter === "c") {
      newArr.push("c")
    }
  })
  
  return newArr.join("")
  
}


console.log(switcheroo('abc'))

// 8kyu string problem
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
 
  if(typeof x === "string") {
    return "Error"
  }
   x = x * 50
   return x + 6
}

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// array of array of pairs
// iterate over array of arrays check if  both elements meet condition if so push to new array


const input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
const newArr = []

for (let i = 0; i < input.length; i++) {
  if(input[i][0] >= 55 && input[i][1] > 7) {
    newArr.push("senior")
  } else{
    newArr.push("open")
  }
  return newArr
}

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut (string) {
  let vowelPattern = /[aeiou]/;
  let result = string.replace(/[aeiou]/g, '');
  return result;
  
}

console.log(shortcut("how are you today?"))

// 
function remove (string) {
  //coding and coding....
  const newStr = string.split("")
  if(newStr[newStr.length - 1] === "!") {
     newStr.pop()
    return newStr.join("")
  }
  
  // return newStr.join("")
  return  newStr.join("")
}

console.log(remove("!Hi"))

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // Check if the entered coupon code matches the correct code
  if (enteredCode !== correctCode) {
      return false;
  }

  // Parse the current date and expiration date strings to Date objects
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  // A coupon is valid if the current date is on or before the expiration date
  return current <= expiration;
}

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
      maxEndingHere += arr[i];
      if (maxEndingHere < 0) {
          maxEndingHere = 0;
      }
      if (maxSoFar < maxEndingHere) {
          maxSoFar = maxEndingHere;
      }
  }

  return maxSoFar;
}

// Example
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([])); // 0
console.log(maxSequence([-1, -2, -3, -4])); // 0
console.log(maxSequence([2, 3, -1, 2, -1, 2, 1])); // 8


// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation){
  if( employed && !vacation) {
    return true
  }
  
  return false
}

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  if(array.length === 0) {
    return 0
  }
  
  let avg = 0
  for(let i = 0; i < array.length; i++) {
    avg += array[i]
  }
  
  return avg/array.length
  }
  (findAverage([1,1,1]), 1);
  // There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

const number = function(busStops){
  // Good Luck!
  let peopleOn = 0
  let peopleOff = 0
  for(let i = 0; i < busStops.length; i++) {
   peopleOn += busStops[i][0]
   peopleOff += busStops[i][1]
  }
  return peopleOn - peopleOff
}
                // 11      5     15     20    17
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
 

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x){
  let sum = 0
 for(let i = 0; i < x.length; i++) {
   if(typeof x[i] === "number") {
      sum += x[i]
   } else{
     sum += parseInt(x[i])
   }
 }
 return sum
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let repeatingNumber;
   if (numbers[0] === numbers[1] ||numbers[0] === numbers[2]) {
       repeatingNumber = numbers[0];
   } else {
       repeatingNumber = numbers[1];
   }

   // Use the find method to locate the number that is different
   return numbers.find(num => num !== repeatingNumber);


}

stray([1, 1, 2])