const LineDiff = require("../lib")
    , fs = require("fs")

// Show differences between the two files
console.log(
    new LineDiff(
        fs.readFileSync(__dirname + "/1.txt", "utf-8")
      , fs.readFileSync(__dirname + "/2.txt", "utf-8")
    ).toString()
)
//   not modified
// - old
// - deleted
// -
// - 12345
// + new
// + 1234

console.log(
    new LineDiff(
        fs.readFileSync(__dirname + "/1.txt", "utf-8")
      , fs.readFileSync(__dirname + "/2.txt", "utf-8")
      , 3
    ).toString()
)
//   not modified
//   new
// - deleted
// -
// - 12345
// + 1234
