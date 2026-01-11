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
