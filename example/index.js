// Dependencies
var LineDiff = require("../lib")
  , Fs = require("fs")
  ;

// Show differences between the two files
console.log(
    LineDiff(
        Fs.readFileSync(__dirname + "/1.txt", "utf-8")
      , Fs.readFileSync(__dirname + "/2.txt", "utf-8")
    ).toString()
);

console.log(
    LineDiff(
        Fs.readFileSync(__dirname + "/1.txt", "utf-8")
      , Fs.readFileSync(__dirname + "/2.txt", "utf-8")
      , 3
    ).toString()
);
