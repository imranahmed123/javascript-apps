const fs = require("fs");

try {
  // Storing the data form file.txt file in data
  const data = fs.readFileSync("./file.txt", "utf8");
  console.log(data); // To show the data
} catch (error) {
  console.error(error); // if error is catched
}
console.log("sync file log");