#!/usr/bin/node
const arg = process.argv[2]; // Get the first argument from the command line

const num = parseInt(arg); // Attempt to convert the argument to an integer

if (!isNaN(num)) {
  console.log(`My number: ${num}`); // Print if the argument can be converted to an integer
} else {
  console.log('Not a number'); // Print if the argument can't be converted to an integer
}

