import * as readline from "readline";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('what is your name?', function (answer) {
    console.log("Thank for your valuble feedback: " + answer);
});
