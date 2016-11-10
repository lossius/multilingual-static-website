# Multi-lingual static web site

This is a demo project for how to build a multi-lingual static website. All translations of a page are maintained in the same document, and the variuous language verisons are displayed or hidden depending on choice of locale. Language preference is stored in a cookie and remembered from one page to the next.

In this example the `localeNo` and `localeEn` classes are used for Norwegian and English text elements respectively. Similar classes can be constructed for other languages. In order to change languages or add support for more languages, the `showLocale()` method in `scripts/locale.js` will have to be modified. Currently it supports Norwegian (default) and English. This file also need to be adjusted for the domain name of your site in `line 9` of `scripts/locale.js`.

## Dependencies

This website depends on <a href="https://jquery.com/">jQuery</a>. If you use other frameworks such as Bootstrap, jQuery is already included there. Additionally it makes use of <a href="https://github.com/js-cookie/js-cookie">js-cookie</a>.

## Demo

An online demo version of this web site [can be found here](http://multilingual.trondlossius.no/another.htm).

