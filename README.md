electron-search-dialog -- Electron simple search dialog for page contents.
===========================================

## Description

Electron simple search dialog for page contents.  
Electron BrowserWindow based mini dialog,  
and findInPage based searching logic.

<img src="https://raw.githubusercontent.com/taku-o/electron-search-dialog-sample/master/ss-mini.png" width="400">

<img src="https://raw.githubusercontent.com/taku-o/electron-search-dialog-sample/master/animation.gif" width="400">

sample code using electron-search-dialog library:
- https://github.com/taku-o/electron-search-dialog-sample


## Install

```bash
npm install --save electron-search-dialog
````


## Usage

From renderer process js:

```js
var SearchDialog = require('electron-search-dialog').default;

// create instance.
var mainWindow = require('electron').remote.getCurrentWindow();
var sd = new SearchDialog(mainWindow);

// open search dialog
sd.openDialog();
```


## functions

```
/**
 * constructor.
 *
 * parent is window instance that is searching target window.
 * locale is dialog message locale. if locale is not passed, use app.getLocale() as default locale.
 * 
 * var _searchDialog = new SearchDialog(mainWindow, 'en');
 */
constructor(parent: Electron.BrowserWindow, locale?: string);

/**
 * open search dialog.
 */
openDialog(): void;

/**
 * close search dialog.
 */
closeDialog(): void;
```


## supported localess
- en (default)
- ja


