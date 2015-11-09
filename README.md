[![line-diff](http://i.imgur.com/LBR41CC.png)](#)

# line-diff [![Support this project][donate-now]][paypal-donations]

Compare strings line by line.

## Installation

```sh
$ npm i -g line-diff
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
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`diffr`](https://npmjs.com/package/diffr)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md