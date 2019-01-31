electron-search-dialog -- simple Electron dialog for searching page contents.
===========================================

## Description

simple Electron dialog for searching page contents.

## Install

```bash
npm install --save electron-search-dialog
````

## Usage

From main process js:

```js
var searchDialog = require('electron-search-dialog').default;

// create instance.
var win = ... // searching page (BrowserWindow)
var sd = searchDialog(win);

// open search dialog
sd.openDialog();

// close search dialog
sd.closeDialog();
```

