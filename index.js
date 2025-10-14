

// sample.js
const fs = require("fs");
require("dotenv").config(); // load .env file

// Content to write
const content = "Hello, this is a sample file created with Node.js!"+process.env.MATRIX;

// Create and write to file
fs.writeFile("./sample.txt", content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File created successfully: sample1.txt");
});

console.log("Current working directory:", process.cwd());
console.log("Script directory:", __dirname);
console.log("Hello, CI/CD! 5x copy folder",process.env.MATRIX);

