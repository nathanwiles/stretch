// GOAL: to reduce repetitive code and make solution as general as possible. 

// helper function: checks if value is evenly divisible by muliple.
const checkIsMultiple = function(value, multiple){
  if (value % multiple === 0) { 
    return true;
  } else {
    return false;
  }
  
};

function loopyLighthouse(range, multiples, words){
  // Iterate over range
  for (let i = range[0]; i <= range[1]; i++){
    // define output as empty string.
    let output = "";
    // iterate through multiples array
    for (const [index, multiple] of multiples.entries()){
      // use helper function: check if current multiple is a match.
      if (checkIsMultiple(i, multiple)) output += words[index]; // if yes, add corresponding word to output string.
    }
    // check to see if output is still an empty string
    if (!output) output = i; // if empty, assign value that was tested: 'i'.
    console.log(output); // log results as they're generated.
  }
};

loopyLighthouse([0, 20], [2, 3, 5], ["Batty", "Baby", "Beacon"]);

