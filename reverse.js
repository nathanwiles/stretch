/* TASKS
  - take string arguments from the command line [done]

      - reverse the character order [done]
      - log to console one at a time [done]
*/

// get string arguments from command line
let input = process.argv.slice(2);

// helper function: reverse a string and return the result.
const reverseString = function(string) {
  let output = "";
  // iterate over string backwards, add each letter to output.
  for (let i = string.length - 1; i >= 0; i--) {
    output += string.charAt(i);
  }
  return output;
};

// helper function: log each element in an array.
const logEach = function(array) {
  for (const element of array) {
    console.log(element);
  }
};

// main function, reverse each string and then logs them using the helper functions.
const reverseAndLog = function(arrayOfStrings) {
  // define empty array to hold reversed strings.
  let arrayOfReversedStrings = [];
  // itereate through arrayOfStrings, reverse each string then push result to arrayOfReversedStrings
  for (const string of arrayOfStrings) {
    // use helper function to reverse string.
    let reversedString = reverseString(string);
    arrayOfReversedStrings.push(reversedString);
  }
  // use helper function to log each resulting string, one by one.
  logEach(arrayOfReversedStrings);
};

//  function call to run program
reverseAndLog(input);

