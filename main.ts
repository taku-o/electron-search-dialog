'use strict';
const app = require('electron').remote.app;
const localShortcut = require('electron-localshortcut');

export default class Dialog {
  readonly width: number;
  readonly height: number;

  readonly parent: Electron.BrowserWindow;
  readonly locale: string;
  win: Electron.BrowserWindow;

  constructor(parent: Electron.BrowserWindow, locale?: string) {
    this.parent = parent;
    this.locale = locale? locale: app.getLocale();
  }

  openDialog(): void {
    if (this.win && !this.win.isDestroyed()) {
      this.win.show(); this.win.focus();
      return;
    }

    // display center
    const bounds = this.parent.getBounds();
    const x = bounds.x + bounds.width / 2;
    const y = bounds.y + bounds.height / 2;

    this.win = new BrowserWindow({
      parent: this.parent,
      modal: false,
      width: this.width,
      height: this.height,
      x: x,
      y: y,
      acceptFirstMouse: true,
      show: false,
      minimizable: false,
      maximizable: false,
      fullscreenable: false,
    });
    this.win.loadFile('./renderer.html');

    // shortcut
    localShortcut.register(this.win, 'Command+Q', () => {
      app.quit();
    });
    localShortcut.register(this.win, 'Command+W', () => {
      if (this.win) { this.win.hide(); }
    });

    // event
    this.win.webContents.on('did-finish-load', () => {
      this.win.show(); this.win.focus();
    });
    this.win.on('close', (event) => {
      event.preventDefault();
      this.win.hide();
    });
    this.helpSearchDialog.on('closed', () => {
      this.win = null;
    });
  }

  closeDialog(): void {
    this.win.hide();
  }
}