

// sample.js
const fs = require("fs");

// Content to write
const content = "Hello, this is a sample file created with Node.js!";

// Create and write to file
fs.writeFile("./sample.txt", content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File created successfully: sample.txt");
});

console.log("Hello, CI/CD! 4x");

