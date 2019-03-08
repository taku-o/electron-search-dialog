(function(window, document) {
  document.addEventListener('DOMContentLoaded', () => {
    // focus text field at focus
    window.onfocus = function() {
      document.getElementById('search-text').focus();
    };

    // search
    function search(event) {
      event.preventDefault();
      const input: any = document.getElementById('search-text');
      const searchText = input.value;

      const win = require('electron').remote.getCurrentWindow();
      if (searchText) {
        win.getParentWindow().webContents.findInPage(searchText);
      } else {
        win.getParentWindow().webContents.stopFindInPage('clearSelection');
      }
      return false;
    }
    const formSearch = document.getElementById('search-form');
    const btnSearch = document.getElementById('search');
    formSearch.addEventListener('submit', search);
    btnSearch.addEventListener('click', search);

    // clear
    const clear = document.getElementById('clear');
    clear.addEventListener('click', (event) => {
      event.preventDefault();
      const input: any = document.getElementById('search-text');
      input.value = '';

      const win = require('electron').remote.getCurrentWindow();
      win.getParentWindow().webContents.stopFindInPage('clearSelection');
      return false;
    });

    // close
    const btnClose = document.getElementById('close');
    btnClose.addEventListener('click', (event) => {
      event.preventDefault();
      const win = require('electron').remote.getCurrentWindow();
      win.hide();
      return false;
    });
  });
})(window, document);
