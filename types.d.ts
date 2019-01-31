declare namespace ElectronSearchDialog {
  class Dialog {
    constructor(win: Electron.BrowserWindow, locale?: string);
    openDialog():  void;
    closeDialog(): void;
  }
}

declare module 'electron-search-dialog' {
  export = Dialog;
}
