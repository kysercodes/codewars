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
