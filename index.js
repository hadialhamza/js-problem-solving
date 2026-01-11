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
// console.log(reverseString("hello"));

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
// console.log(vowelsCounter("programming"));

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
// console.log(isPalindrome("madam"));

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
// console.log(maxNum([5, 1, 99, 101, 3]));
