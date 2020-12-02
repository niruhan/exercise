const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');

// console.log('It works!');

// YOUR CODE HERE

// Since file i/o operations are heavy I decided to build a string with the answer 
// for each task and then write to file at the end

// Task 1
var task1result = 'Task 1\n\n';
for (i = 1; i <= 100; i++) {
  task1result += i + ": " + getRandomWordSync() + "\n";
  }

fs.writeFile("./result.txt", task1result, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Task 1 was saved!");
}); 

// Task 2
var task2result = '\n\nTask 2\n\n';
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            task2result += i + ": " + "FizzBuzz\n";
        } else {
            task2result += i + ": " + "Fizz\n";
        }
    } else if (i % 5 === 0) {
        task2result += i + ": " + "Buzz\n";
    } else {
        task2result += i + ": " + getRandomWordSync() + "\n";
    }
  }

fs.appendFile("./result.txt", task2result, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Task 2 was saved!");
}); 

// Task 3
// Task 1 with async
// Check the section 'Optimization for async' for optimized solution
var task3_1result = '\n\nTask 3\nTask 1 with async\n\n';
for (let i = 1, p = Promise.resolve(); i <= 101; i++) {
  if (i === 101) {
    p = p.then(_ => {
      fs.appendFile("./result.txt", task3_1result, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Task 3 - 1 was saved!");
      }); 
    });
  } else {
    p = p.then(_ => getRandomWord().then(word => {task3_1result +=  i + ": " + word + "\n"}));
  }
}

// Task 2 with async
var task3_2result = '\n\nTask 3\nTask 2 with async\n\n';
for (let i = 1, p = Promise.resolve(); i <= 101; i++) {
  if (i === 101) {
    // p = p.then(_ => console.log(task3_2result));
    p = p.then(_ => {
        fs.appendFile("./result.txt", task3_2result, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("Task 3 - 1 was saved!");
        }); 
      });
  } else if (i % 3 === 0) {
    if (i % 5 === 0) {
      p = p.then(_ => task3_2result += i + ": " + "FizzBuzz\n");
    } else {
      p = p.then(_ => task3_2result += i + ": " + "Fizz\n");
    }
  } else if (i % 5 === 0) {
    p = p.then(_ => task3_2result += i + ": " + "Buzz\n");
  } else {
    p = p.then(_ => getRandomWord().then(word => {
      task3_2result += i + ": " + word + "\n";
    }
  ));}
}

// Task 4
// Error handling for synchronous function
var task4_1result = '\n\nTask 4\nError handling for synchronous function\n\n';
for (i = 1; i <= 100; i++) {
  try {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        task4_1result += i + ": " + "FizzBuzz\n";
      } else {
        task4_1result += i + ": " + "Fizz\n";
      }
    } else if (i % 5 === 0) {
      task4_1result += i + ": " + "Buzz\n";
    } else {
      task4_1result += i + ": " + getRandomWordSync({withErrors: true}) + "\n";
    }
  } catch (_) {
    task4_1result += i + ": It shouldn't break anything!\n";
  }
}

fs.appendFile("./result.txt", task4_1result, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("Task 4 - 1 was saved!");
});

// Error handling for asynchronous function
var task4_2result = '\n\nTask 4\nError handling for asynchronous function\n\n';

for (let i = 1, p = Promise.resolve(); i <= 101; i++) {
  if (i === 101) {
    p = p.then(_ => {
        fs.appendFile("./result.txt", task4_2result, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("Task 3 - 1 was saved!");
        }); 
      });
} else if (i % 3 === 0) {
    if (i % 5 === 0) {
      p = p.then(_ => task4_2result += i + ": " + "FizzBuzz\n");
    } else {
      p = p.then(_ => task4_2result += i + ": " + "Fizz\n");
    }
  } else if (i % 5 === 0) {
    p = p.then(_ => task4_2result += i + ": " + "Buzz\n");
  } else {
    p = p.then(_ => getRandomWord({ withErrors: true}).then(word => {
      task4_2result += i + ": " + word + "\n";
    }
  ).catch(_ => task4_2result += i + ": It shouldn't break anything!\n"));}
}

// Optimization for async
var words = [];
for (i = 1; i <= 100; i++) {
  words.push(getRandomWordSync({slow: true}));
}

n = 1;
var optimizationResult = '\n\nOptimization with async results\n\n';
while (n <= 101) {
  if (n === 101) {
    fs.appendFile("./result.txt", optimizationResult, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Task 3 - 1 was saved!");
      }); 
    n = n + 1;
  } else if (n % 3 === 0) {
      if (n % 5 === 0) {
          optimizationResult += n + ": " + "FizzBuzz\n";
      } else {
          optimizationResult += n + ": " + "Fizz\n";
      }
      n = n + 1;
  } else if (n % 5 === 0) {
      optimizationResult += n + ": " + "Buzz\n";
      n = n + 1;
  } else if (words.length > 0) {
    optimizationResult += n + ": " + words.shift() + "\n";
    n = n + 1;
  }
}