'use strict';
import {app, BrowserWindow} from 'electron';
const localShortcut = require('electron-localshortcut');

class Dialog {
  readonly width: number;
  readonly height: number;

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
    this.win.loadFile(`./template/dialog-${this.locale}.html`);

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
    this.win.on('closed', () => {
      this.win = null;
    });
  }

  closeDialog(): void {
    this.win.hide();
  }
}

export default function searchDialog(parent: any, locale?: string) {
  return new Dialog(parent, locale);
}
