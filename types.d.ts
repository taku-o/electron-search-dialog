declare namespace ElectronSearchDialog {
  class Dialog {
    constructor(parent, locale?: string);
    openDialog():  void;
    closeDialog(): void;
  }
}

export default function searchDialog(parent, locale?: string): ElectronSearchDialog.Dialog;
