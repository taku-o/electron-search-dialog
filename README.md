electron-search-dialog -- Electron simple search dialog for page contents.
===========================================

## Description

Electron simple search dialog for page contents.  
Electron BrowserWindow based mini dialog,  
and findInPage based searching logic.

<img src="https://raw.githubusercontent.com/taku-o/electron-search-dialog-sample/master/ss-mini.png" width="400">

## Install

```bash
npm install --save electron-search-dialog
````

## Usage

### simplest sample code.
From main process js:

```js
var SearchDialog = require('electron-search-dialog').default;

// create instance.
var win = ... // searching page (BrowserWindow)
var sd = new SearchDialog(win);

// open search dialog
sd.openDialog();
```

### long sample code.
sample code repository is here.
- https://github.com/taku-o/electron-search-dialog-sample

main process:
```js
var {app, BrowserWindow, ipcMain} = require('electron')
var SearchDialog = require('electron-search-dialog').default;

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // -----------------------------
  // create SearchDialog instance,
  // and add open search dialog event
  // -----------------------------
  var _searchDialog = new SearchDialog(mainWindow);
  ipcMain.on('openSearchDialog', (event, message) => {
    _searchDialog.openDialog();
  });
}
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
```

renderer process:
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World!</h1>
    We are using Node.js <script>document.write(process.versions.node)</script>,
    Chromium <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
    <br>
    <button id="btn">open</button>

    <script>
      require('./renderer.js')
    </script>
  </body>
</html>
```

```js
// -----------------------------
// at search button clicked,
// send open search dialog event.
// -----------------------------
var ipcRenderer = require('electron').ipcRenderer;

var btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  ipcRenderer.send('openSearchDialog', 'open');
});
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

## supported keyboard shortcut

```
// close application
CommandOrControl+Q

// close dialog
CommandOrControl+W
```

## supported localess
- en (default)
- ja


