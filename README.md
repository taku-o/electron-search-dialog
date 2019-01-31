electron-search-dialog -- Electron dialog for searching page contents.
===========================================

## Description

Electron dialog for searching page contents.

## Install

```bash
npm install --save electron-search-dialog
````

## Usage

From renderer process js:

```js
var SearchDialog = require('electron-search-dialog');

// create instance.
var win = require('electron').remote.getCurrentWindow();
var sd = new SearchDialog(win);

// open search dialog
sd.openDialog();

// close search dialog
sd.closeDialog();
```

