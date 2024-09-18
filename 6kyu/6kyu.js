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

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
const uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  const result = []
  for(let i = 0; i < iterable.length; i++) {
   if(i === 0 || iterable[i] !== iterable[i - 1]){
     result.push(iterable[i])
   }
  }
  return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB') )

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
  // build here
   const arr = [];
    let width = nFloors * 2 - 1; // Width of the bottom floor

    for (let i = 0; i < nFloors; i++) {
        let stars = '*'.repeat(2 * i + 1); // Number of stars in the current floor
        let spaces = ' '.repeat((width - stars.length) / 2); // Calculate spaces to center the stars
        arr.push(spaces + stars + spaces); // Build the floor
    }

    return arr;
}

console.log(towerBuilder(5))

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }
  if(p1=== "rock" && p2 === "scissors") {
    return "Player 1 won!"
  }
  if(p1=== "scissors" && p2 === "paper") {
    return "Player 1 won!"
  }

  if(p1=== "paper" && p2 === "rock") {
    return "Player 1 won!"
  }//   player 2 win

   if(p1=== "scissors" && p2 === "rock") {
    return "Player 2 won!"
  }
  
  if(p1=== "paper" && p2 === "scissors") {
    return "Player 2 won!"
  }
  if(p1=== "rock" && p2 === "paper") {
    return "Player 2 won!"
  }
}

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
  const mergedArr = arr1.concat(arr2).sort((a,b) => { return a-b})
   return mergedArr.filter((el,idx,arr) => {
   return idx === 0 || arr[idx] !== arr[idx - 1]
  })
   // console.log(mergedArr)
 }
 console.log(mergeArrays([1,2,3,4], [5,6,7,8]))
 console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))


//  You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string){
  //your code here
  const newString = string.split(" ")
  console.log(newString)
  const newArr = []
  
  for (let i = newString.length - 1; i >= 0; i--) {
    newArr.push(newString[i]);
}
  return newArr.join(" ")
}

console.log(reverse('I am an expert at this'))

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

function mouthSize(animal) {
  // code here
  if(animal.toLowerCase() === "alligator") {
    return "small";
  }else{
    return "wide"
  }
}

console.log(mouthSize("toucan"))

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

console.log( sumArray([ 6, 2, 1, 8, 10 ]))

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  
  //your code here!
if( current ==='green'){
  return "yellow"
}
  if(  current === "yellow"){
  return "red"
}
  if( current === "red"){
  return "green"
}
}

console.log(updateLight("green"))



// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
  //your code here
   let uniqueDigits = [...new Set(values)];
  
  uniqueDigits.sort((a,b) => a - b)
  let smallestNumberStr = uniqueDigits.join('');
  
  return Number(smallestNumberStr)
}

console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]))

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if(n < 0 || m < 0) {
    return 0
  }
  return n * m
}
// n is the class mates
// m is the number of pages

console.log(paperwork(-5,-5))

// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'
// Part 2
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.
function forEach(arr, cb) {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[i])
  }
}

function map(arr,cb) {
 const newArr = [];
 
 // 
 forEach(arr, (el) => {
   newArr.push(cb(el))
 })
 return newArr
}
// Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  //coding and coding....
  const newStr = s.replace(/[aeiouAEIOU]/g, '!');
  
  return newStr
  
  
}

console.log(replace("!Hi! Hi!"));

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  //coding and coding..
  const newStr = str.replace(/[^a-zA-Z]/g,"")
   return newStr.split("").reverse().join("")
  
}

console.log(reverseLetter("ultr53o?n"))

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  // Return a new array with the strings filtered out
//   will there ever be negative numbers?
//   will the array ever be empty?
//   input array
//   output array - non negative integers
//   turn array into string 
  return l.filter(item => typeof item === 'number' && item >= 0);
}
console.log(filter_list([1,2,'a','b']))


// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  const regex = /[^a-m]/g;
    // your code
  
//   one kind of box uses colors  letters names a - m
//   colors are recorded in a string
  const length = s.length
 const errors =  s.match(regex)
 console.log(errors)

  const errorsCount = errors ? errors.length : 0;

 return  `${errorsCount}/${length}`
}
console.log(printerError("accwcwcwcw"))

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  if(nums === null) {
    return []
  }
   
   return nums.sort((a,b) => a - b)
 }

//  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //code here

const newStr = str.toLowerCase()
let xCount = 0;
let oCount = 0;

newStr.split("").forEach((el) => {
  if(el === "x") {
    xCount ++
  } else if (el === "o") {
    oCount ++
  }
})

if(xCount === oCount) {
  return true
} else {
  return false
}

}
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// FUNDAMENTALS

function calculateYears(principal, interest, tax, desired) {
  // your code
  var years = 0;
  while(principal < desired){
    principal += (principal * interest) * (1 - tax);
    years++;
  }
  return years;
}

calculateYears(1000, 0.05, 0.18, 1100)

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code
// join the strings
//   filter out  any duplicates 
//   order them alphabetically
  let newStr = new Set (s1.concat(s2))
  newStr = [...newStr].sort().join("")
  return newStr
}

console.log(longest("inmanylanguages", "theresapairoffunctions"))

// write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {

  
  //   create new array
  //   iterate over array remove 0s
  //   push 0's to new array
    const newArr = arr.filter((el) => el !== 0)
    arr.forEach((el) => {
      if(el === 0) {
        newArr.push(el)
      }
    })
    
    return newArr
  }
  
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
  
  // Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

  // The geese are any strings in the following array, which is pre-populated in your solution:
  
  //   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  // For example, if this array were passed as an argument:
  
  //  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
  // Your function would return the following array:
  
  // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
  // The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
  
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   return birds.filter((el) => { return !geese.includes(el)})
  // return an array containing all of the strings in the input array except those that match strings in geese
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  
  let num = parseInt(a) + parseInt(b)
  
  return num.toString()
}

console.log(sumStr("34","5"))
// 
// inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18;
  } else{
    return 0
  }
}


// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.
// use while loop to  accomplish this if number is odd print a 1 if even print a 0

function stringy(size) {
  // your code here
  let i = 0
  let str = ""

while (i < size) {
  console.log(i)
  if(i % 2 === 0) {
  str += "1"
  } else {
    str += "0"
  }
    // console.log(i);  // Output the value of i
    
  i++;     
  
  // Increment i to avoid an infinite loop
}
 return str
}

console.log(stringy(4))

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  // Add your code here
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let lowerChar = char.toLowerCase();  // Convert character to lowercase

    // Check if the first and last occurrence of the lowercase character are the same
    if (s.toLowerCase().indexOf(lowerChar) === s.toLowerCase().lastIndexOf(lowerChar)) {
      return char;  // Return the character in its original case
    }
  }
    return "";  // Return null if no repeating character is found
}

console.log(firstNonRepeatingLetter("stress"))

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
  //your code here
  if(num === 0){
    return ""
  }
  let count = 0;
  let sheeps = "";

while (count < num) {
  ;
  count++;  // Increment count to avoid infinite loop
  sheeps += `${count.toString()} sheep...`      
}
  console.log(sheeps(5))
}
 

console.log(countSheep(3))

// / Words are separated by exactly one space and there are no leading or trailing spaces.

// // Example(Input --> Output):

// // "The greatest victory is that which requires no battle" --> "battle no requires w

// function reverseWords(str){
// const newStr =  str.split(" ")
//  return newStr.reverse().join(" ")
  

// }

// console.log(reverseWords("yoda doesn't speak like this"))

function reverseWords(str){
  const newStr =  str.split(" ")
   return newStr.reverse().join(" ")
    
  
  }
  
  console.log(reverseWords("yoda doesn't speak like this"))


//   Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

function solution(pairs){
  const newArr = []
  // TODO: complete
  for (const [key, value] of Object.entries(pairs)) {
  newArr.push(`${key} = ${value}`);
}
  return newArr.join()
}

console.log(solution({'a': 1, 'b': 2}))

  // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"

function solution(a, b){
  // your code here
  if(a.length < b.length) {
    console.log(a)
    return `${a}${b}${a}`
  } else {
     return `${b}${a}${b}`
  }
  
}

console.log(solution('U', 'False'))

// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function(value) {
  //Complete this function :) 
  
  const newArr = []
  
 value.split("").forEach((el) => {
   if(!isNaN(el)) {
     newArr.push(el)
   } 

 })
  
  return newArr.join("")
}

console.log(filterString('145abs'))
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorterReverseLonger(a,b){
  let longer
  let shorter
 if(a.length === b.length) {
   longer = a.split("").reverse().join("")
   shorter = b
   
   return `${longer}${shorter}${longer}`
  
 }
  if(a.length > b.length) {
   longer = a.split("").reverse().join("")
   shorter = b
   
   return `${longer}${shorter}${longer}`
  
 }
  if(a.length < b.length) {
   longer = b.split("").reverse().join("")
   shorter = a
   
   return `${longer}${shorter}${longer}`
  
 }
}

console.log(shorterReverseLonger("first", "abcde"))

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  
  console.log(str.split("").join(" "))
  
  // turn the string into an array
  // put space between characters
  // turn back into string
  // return 
}

console.log(spacify('hello world'))
