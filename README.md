![Line Diff - Compare strings line by line.](http://i.imgur.com/LBR41CC.png)

# line-diff
Compare strings line by line.

## Installation
```sh
$ npm install line-diff
```

## Example
```js
// Dependencies
var LineDiff = require("line-diff")
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
```

Output

```sh
   not modified
 - old
 - deleted
 -
 - 12345
 + new
 + 1234

   not modified
   new
 - deleted
 -
 - 12345
 + 1234
```

## Documentation
### `Change(oldLine, addedLine, sensitivity)`
A private function to compare two lines.

#### Params
- **String** `oldLine`: The old line value.
- **String** `addedLine`: The new line.
- **Number** `sensitivity`: The diff sensitivity.

#### Return
- **Change** The `Change` object:
 - `_` (Array): An array with the old line and the new line.
 - `changes` (Number): How many changes are there, calculated with the levenshtein distance algorithm.
 - `modified` (Boolean): A boolean value representing if the old line was modified or not.

### `Diff(oldLines, newLines, sensitivity)`
Compares strings line by line.

#### Params
- **String|Array** `oldLines`: The old lines.
- **String|Array** `newLines`: The new lines.
- **Number** `sensitivity`: A number representing how many changes should be there to consider that a line was changed (default: `0`).

#### Return
- **Diff** The `Diff` object containing:
 - `old_lines` (Array): The old lines.
 - `new_lines` (Array): The new lines.
 - `sensitivity` (Number): The diff sensitivity.
 - `changes` (Array): An array of `Change` objects.
 - `toString` (Function): A function to stringify the diff.

### `toString()`
Converts the lines comparison into a string.

#### Return
- **String** The stringified diff.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
