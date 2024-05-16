// EXTRA 20 point3. Bir funksiya yazın həmən funksiya 3 parametr qəbul etsin 1-ci hər hansı bir string ex: "Jhon Doe",  2-ci bir herfden ibaret strnig ex: "a" və ya "T", 3-cü  isə true və ya false  dəyəri qəbul etsin. daha sonra funksiya gələn birinci stringin içində gəzərək ikinci stringin olduğu hissələri tapıb onları gələn 3-cü parametrə (true və ya false) görə böyük yada kiçik hərfə çevirsin sonda isə dəyişdirilmiş stringi qaytarsın.

// ex 1: modifyString("Jhon Doe", "e", true) // output: "Jhon DoE"

// ex 2: modifyString("Jhon Doe", "j", false) // output: "jhon Doe"

// ex 3: modifyString("Jhon Doe", "o", true) // output: "jhOn DOe"

// !task 1

// function upperCase(str) {
//   str = str.split(" ");

//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(" ");
// }

// let word = prompt("Please enter what you want to write: ");

// console.log(upperCase(word));

// !task 2
// function palindrome(str) {
//   console.log(`Normal word - ${str}`);
//   word = str.split("").reverse().join("").replaceAll(" ", "");
//   console.log(`Palindrome word - ${word}`);
//   if (word === str) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// let word = prompt("Please enter what you want to write: ");

// palindrome(word);

//! task 3

function modifyString(name, word, boolean) {
  if (name.includes(word) && boolean === "true") {
    name = name.replaceAll(word, word.toUpperCase());
    console.log(name);
  } else if (boolean === "false") {
    word = word.toUpperCase();
    name = name.replace(word, word.toLowerCase());
    console.log(name);
  } else {
    console.log("bu herf yoxdur");
  }
  console.log(word);
  console.log(boolean);
}

let user = prompt("Please enter your name: ");
let letter = prompt("Please enter your letter: ");
let boolean = prompt("Please write true or false: ");

modifyString(user, letter, boolean);
