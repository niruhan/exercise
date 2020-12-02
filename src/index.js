const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');

// console.log('It works!');

// YOUR CODE HERE

// Task 1
// var task1result = 'Task 1\n\n';
// for (i = 1; i <= 100; i++) {
//   task1result += i + ": " + getRandomWordSync() + "\n";
//   }

// fs.writeFile("./result.txt", task1result, function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// }); 

// Task 2
// var task2result = '\n\nTask 2\n\n';
// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         if (i % 5 === 0) {
//             task2result += i + ": " + "FizzBuzz\n";
//         } else {
//             task2result += i + ": " + "Fizz\n";
//         }
//     } else if (i % 5 === 0) {
//         task2result += i + ": " + "Buzz\n";
//     } else {
//         task2result += i + ": " + getRandomWordSync() + "\n";
//     }
//   }

// fs.appendFile("./result.txt", task2result, function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// }); 

// Task 3
// Task 1 with async
var task3result = '\n\nTask 3\nTask 1 with async\n\n';
for (let i = 1, p = Promise.resolve(); i <= 101; i++) {
  if (i === 101) {
    // console.log(task3result);
  } else {
    p = p.then(_ => getRandomWord().then(word => {task3result+=  i + ": " + word}));
  }
}

// Task 2 with async
// for (let i = 1, p = Promise.resolve(); i <= 100; i++) {
//   p = p.then(_ => getRandomWord().then(word => {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         console.log(i + ": " + "FizzBuzz");
//       } else {
//         console.log(i + ": " + "Fizz");
//       }
//     } else if (i % 5 === 0) {
//       console.log(i + ": " + "Buzz");
//     } else {
//       console.log(i + ": " + word)
//     }
//   }));
// }

// Task 4
// Error handling for synchronous function
// for (i = 1; i <= 100; i++) {
//   try {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         console.log(i + ": " + "FizzBuzz");
//       } else {
//         console.log(i + ": " + "Fizz");
//       }
//     } else if (i % 5 === 0) {
//       console.log(i + ": " + "Buzz");
//     } else {
//       console.log(i + ": " + getRandomWordSync({withErrors: true}));
//     }
//   } catch (_) {
//     console.log(i + ": It shouldn't break anything!");
//   }
// }

// Error handling for asynchronous function
// for (let i = 1, p = Promise.resolve(); i <= 100; i++) {
//   p = p.then(_ => getRandomWord({ withErrors: true}).then(word => {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         console.log(i + ": " + "FizzBuzz");
//       } else {
//         console.log(i + ": " + "Fizz");
//       }
//     } else if (i % 5 === 0) {
//       console.log(i + ": " + "Buzz");
//     } else {
//       console.log(i + ": " + word)
//     }
//   }).catch(_ => console.log(i + ": It shouldn't break anything!")));
// }

// Optimization for async
// var words = [];
// for (i = 1; i <= 100; i++) {
//   words.push(getRandomWordSync({slow: true}));
// }

// n = 1;

// while (n <= 100) {
//   if (n % 3 === 0) {
//       if (n % 5 === 0) {
//           console.log(n + ": " + "FizzBuzz");
//       } else {
//           console.log(n + ": " + "Fizz");
//       }
//       n = n + 1;
//   } else if (n % 5 === 0) {
//       console.log(n + ": " + "Buzz");
//       n = n + 1;
//   } else if (words.length > 0) {
//     console.log(n + ": " + words.shift());
//     n = n + 1;
//   }
// }