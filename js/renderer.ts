
// search
function search() {
  const input = document.getElmentById('#search-text');
  const searchText = input.value;

  const win = require('electron').remote.getCurrentWindow();
  if (searchText) {
    win.getParentWindow().webContents.findInPage(searchText);
  } else {
    win.getParentWindow().webContents.stopFindInPage('clearSelection');
  }
}
const btnSearch = document.getElmentById('#search');
btnSearch.addEventListener('click', search());

// clear
const clear = document.getElmentById('#clear');
clear.addEventListener('click', () => {
  const win = require('electron').remote.getCurrentWindow();
  win.getParentWindow().webContents.stopFindInPage('clearSelection');
});

// close
const close = document.getElmentById('#close');
close.addEventListener('click', () => {
  const win = require('electron').remote.getCurrentWindow();
  win.hide();
});

