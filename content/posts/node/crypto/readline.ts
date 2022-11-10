

import * as readline from "readline";

const rl =readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


rl.question('what is your name?', answer => {

  console.log(`Thank for your valuble feedback: ${answer}`)

});

