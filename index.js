// Problem 1: Reverse a String
function reverseString(input) {
  // validation for input is a string
  if (typeof input !== "string") {
    return "Please enter a valid string";
  }

  // 1. split the string into an array
  const strArray = input.split("");

  // 2. reverse the array
  const revArray = strArray.reverse();

  // 3. join the reversed array
  const finalString = revArray.join("");

  return finalString;
}

// Problem 2: Count Vowels in a String
function vowelsCounter(input) {
  // validation for input is a string and make the string to lowercase
  if (typeof input !== "string") {
    return "Please enter a valid string";
  }
  input = input.toLowerCase();

  let count = 0;
  const vowels = "aeiou";

  // 1. Loop through the string and find vowel count
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      count++;
    }
  }

  return count;
}

// Problem 3: Check for Palindrome
function isPalindrome(input) {
  // validation for input is a string
  if (typeof input !== "string") {
    return "Please enter a valid string";
  }

  // 1. split the string into an array
  const strArray = input.split("");

  // 2. reverse the array
  const revArray = strArray.reverse();

  // 3. join the reversed array
  const revString = revArray.join("");

  // 4. match the input string with reverse string
  const checkIsPalindrome = input === revString;
  return checkIsPalindrome;
}

// Problem 4: Find the Maximum Number
function maxNum(input) {
  // array validation
  if (!Array.isArray(input)) {
    return "Please enter a valid array.";
  }

  // checking the maximum number in array
  const maxNumber = Math.max(...input);
  return maxNumber;
}

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(input) {
  // array validation
  if (!Array.isArray(input)) {
    return "Please enter a valid array.";
  }

  // remove duplicate items from array using Set constructor
  const uniqueNumbs = new Set(input);

  // make an array with unique numbers
  const uniqueArray = [...uniqueNumbs];
  return uniqueArray;
}

// Problem 6: Sum of All Numbers in an Array
function sum(input) {
  // array validation
  if (!Array.isArray(input)) {
    return "Please enter a valid array.";
  }

  // using reduce array method for total sum of the array
  const totalSum = input.reduce((total, number) => total + number, 0);
  return totalSum;
}

// Problem 7: Find Even Numbers in an Array
function getEvenNumbers(input) {
  // array validation
  if (!Array.isArray(input)) {
    return "Please enter a valid array.";
  }

  // using filter array method for finding the even numbers of the array
  const evenNumber = input.filter((num) => num % 2 === 0);
  return evenNumber;
}

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWord(input) {
  // validation for input is a string
  if (typeof input !== "string") {
    return "Please enter a valid string";
  }

  // split the sentence into words
  const words = input.split(" ");

  // capitalize the first letter into uppercase
  const capitalWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // join the words to make the sentence
  const finalSentence = capitalWords.join(" ");
  return finalSentence;
}

// Problem 9: Find the Factorial of a Number
function factorial(input) {
  // validation for number
  if (typeof input !== "number") {
    return "Please enter a valid number";
  }

  let result = 1;

  // loop till input number and calculate factorial
  for (let i = 1; i <= input; i++) {
    result = result * i;
  }
  return result;
}

// Problem 10: PingPong Challenge
function pingPong() {
  // loop for 1 to 20
  for (let i = 1; i <= 20; i++) {
    // check the numbers for expected result
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
// pingPong();
