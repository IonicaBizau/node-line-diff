
[![line-diff](http://i.imgur.com/LBR41CC.png)](#)

# line-diff

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/line-diff.svg)](https://www.npmjs.com/package/line-diff) [![Downloads](https://img.shields.io/npm/dt/line-diff.svg)](https://www.npmjs.com/package/line-diff)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`diffr`](https://npmjs.com/package/diffr)—CLI diff tool for files, text, and JSON with human readable output.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
