"use strict";
// search
function search() {
    var input = document.getElementById('search-text');
    var searchText = input.value;
    var win = require('electron').remote.getCurrentWindow();
    if (searchText) {
        win.getParentWindow().webContents.findInPage(searchText);
    }
    else {
        win.getParentWindow().webContents.stopFindInPage('clearSelection');
    }
    return false;
}
var btnSearch = document.getElementById('search');
btnSearch.addEventListener('click', search);
// clear
var clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    var win = require('electron').remote.getCurrentWindow();
    win.getParentWindow().webContents.stopFindInPage('clearSelection');
    return false;
});
// close
var btnClose = document.getElementById('close');
btnClose.addEventListener('click', function () {
    var win = require('electron').remote.getCurrentWindow();
    win.hide();
    return false;
});
