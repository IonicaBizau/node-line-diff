
[![line-diff](http://i.imgur.com/LBR41CC.png)](#)

# line-diff

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/line-diff.svg)](https://www.npmjs.com/package/line-diff) [![Downloads](https://img.shields.io/npm/dt/line-diff.svg)](https://www.npmjs.com/package/line-diff) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Compare strings line by line.

## :cloud: Installation

```sh
$ npm i --save line-diff
```


## :clipboard: Example



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

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`diffr`](https://npmjs.com/package/diffr)—CLI diff tool for files, text, and JSON with human readable output.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
