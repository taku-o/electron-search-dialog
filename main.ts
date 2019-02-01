'use strict';
import {app, BrowserWindow} from 'electron';
const localShortcut = require('electron-localshortcut');

export default class Dialog implements ElectronSearchDialog.IDialog {
  readonly width: number  = 430;
  readonly height: number = 120;

  readonly parent: any;
  readonly locale: string;
  win: any;

  constructor(parent: any, locale?: string) {
    this.parent = parent;
    const lc = locale? locale: app.getLocale();
    switch (lc) {
      case 'ja':
      case 'en':
        this.locale = lc;
        break;
      default:
        this.locale = 'en';
    }
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
    this.win.loadFile(`${__dirname}/template/dialog-${this.locale}.html`);

    // shortcut
    localShortcut.register(this.win, 'CommandOrControl+Q', () => {
      app.quit();
    });
    localShortcut.register(this.win, 'CommandOrControl+W', () => {
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
    this.win.on('closed', () => {
      this.win = null;
    });
  }

  closeDialog(): void {
    this.win.hide();
  }
}
