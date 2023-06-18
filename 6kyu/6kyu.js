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