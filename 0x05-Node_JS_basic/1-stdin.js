const readline = require('readline');

console.log('Welcome to Holberton School, what is your name?');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let userInput = '';
rl.on('line', function(input) {
  console.log('Your name is: ', input);
  console.log('This important software is now closing');
  rl.close();
});

/*
rl.question('What is your name\n', function(string) {
  userInput = string;

  console.log('Your name is ' + userInput);
  if (userInput === 'exit') {
    console.log('This important software is now closing');
    rl.close();
  }
})*/