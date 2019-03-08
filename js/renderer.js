"use strict";
(function (window, document) {
    document.addEventListener('DOMContentLoaded', function () {
        // focus text field at focus
        window.onfocus = function () {
            document.getElementById('search-text').focus();
        };
        // search
        function search(event) {
            event.preventDefault();
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
        var formSearch = document.getElementById('search-form');
        var btnSearch = document.getElementById('search');
        formSearch.addEventListener('submit', search);
        btnSearch.addEventListener('click', search);
        // clear
        var clear = document.getElementById('clear');
        clear.addEventListener('click', function (event) {
            event.preventDefault();
            var input = document.getElementById('search-text');
            input.value = '';
            var win = require('electron').remote.getCurrentWindow();
            win.getParentWindow().webContents.stopFindInPage('clearSelection');
            return false;
        });
        // close
        var btnClose = document.getElementById('close');
        btnClose.addEventListener('click', function (event) {
            event.preventDefault();
            var win = require('electron').remote.getCurrentWindow();
            win.hide();
            return false;
        });
    });
})(window, document);
