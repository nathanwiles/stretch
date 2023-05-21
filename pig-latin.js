/*
TASK: [done]
  - take any number of command line arguments [done]
  - convert each to pig latin [done]
    - take first letter
      - move to end of word [done]
      - add "ay" to the end of word [done]
  - puts translated words together into one sentence [done]
    - log sentence to console. [done]
 */

// import command line arguments as array
let input = process.argv.slice(2);

// helper function: returns the result of moving the first char of a string to the end.
const makeFirstCharLast = function(string) {
  let firstChar = string.charAt(0);
  let restOfString = string.slice(1);
  return restOfString + firstChar;
};

// main function: console logs the input array as a string of pig latin.
const generatePigLatin = function(arrayOfStrings) {
  // temp array to store generated strings
  let arrayOfPigLatin = [];
  // generate and store pig latin strings.
  for (const string of arrayOfStrings) {
    arrayOfPigLatin.push(makeFirstCharLast(string) + "ay");
  }
  // use join() to combine generated strings into one.
  let outputString = arrayOfPigLatin.join(' ');
  // console log the results
  console.log(outputString);
};

// call main function.
generatePigLatin(input);