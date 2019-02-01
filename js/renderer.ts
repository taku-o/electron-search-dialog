
// focus text field at focus
window.onfocus = function () {
  document.getElementById('search-text').focus();
};

// search
function search() {
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
const btnSearch = document.getElementById('search');
btnSearch.addEventListener('click', search);

// clear
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  const input: any = document.getElementById('search-text');
  input.value = '';

  const win = require('electron').remote.getCurrentWindow();
  win.getParentWindow().webContents.stopFindInPage('clearSelection');
  return false;
});

// close
const btnClose = document.getElementById('close');
btnClose.addEventListener('click', () => {
  const win = require('electron').remote.getCurrentWindow();
  win.hide();
  return false;
});

