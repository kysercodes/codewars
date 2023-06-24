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