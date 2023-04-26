// function generateRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
//   }  
//   //self-executing async arrow function.
//   (() => {
//     const num = generateRandom(1, 10);
//     console.log(num)
//   })();
  

const fs = require("fs");

// Making asynchronous call to read the file
fs.readFile("./file.txt", "utf8", (error, data) => {
  if (error) return console.error(error); // if error occurred
  console.log(data); // showing the data
});
console.log("Async check...");
