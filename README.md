<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->








[![line-diff](http://i.imgur.com/LBR41CC.png)](#)











# line-diff

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/line-diff.svg)](https://www.npmjs.com/package/line-diff) [![Downloads](https://img.shields.io/npm/dt/line-diff.svg)](https://www.npmjs.com/package/line-diff) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Compare strings line by line.

















## :cloud: Installation

```sh
# Using npm
npm install --save line-diff

# Using yarn
yarn add line-diff
```













## :clipboard: Example



```js
const LineDiff = require("line-diff")
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
```












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







## :memo: Documentation


### `Diff(oldLines, newLines, sensitivity)`
Compares strings line by line.

#### Params

- **String|Array** `oldLines`: The old lines.
- **String|Array** `newLines`: The new lines.
- **Number** `sensitivity`: A number representing how many changes should be there to consider that a line was changed (default: `0`).

#### Return
- **Diff** The `Diff` object containing:
 - `old_lines` (Array|String): The old lines.
 - `new_lines` (Array|String): The new lines.
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
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `@alza54/css-modules-typescript-loader`
 - `@beisen/css-modules-typescript-loader`
 - `@digibear/mush-format`
 - `@kodyl/css-modules-typescript-loader`
 - `@liutsing/css-modules-typescript-loader`
 - `@modern-js/builder-shared`
 - `@morlz/css-modules-typescript-loader`
 - `@personio/css-modules-typescript-loader`
 - `@skyleague/node-standards`
 - `css-interface-loader`
 - `css-modules-typescript-loader`
 - `diffr`
 - `pinman`
 - `rspack-css-modules-typescript-loader`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
