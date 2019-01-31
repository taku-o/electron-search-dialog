declare namespace ElectronSearchDialog {
  class Dialog {
    constructor(parent, locale?: string);
    openDialog():  void;
    closeDialog(): void;
  }
}

export default function SearchDialog(parent, locale?: string): ElectronSearchDialog.Dialog;
