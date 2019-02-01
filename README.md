electron-search-dialog -- Electron simple search dialog for page contents.
===========================================

## Description

Electron simple search dialog for page contents.
Electron.BrowserWindow based dialog.

## Install

```bash
npm install --save electron-search-dialog
````

## Usage

From main process js:

```js
var SearchDialog = require('electron-search-dialog').default;

// create instance.
var win = ... // searching page (BrowserWindow)
var sd = new SearchDialog(win);

// open search dialog
sd.openDialog();

// close search dialog
sd.closeDialog();
```

