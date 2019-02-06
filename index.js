'use strict';
exports.__esModule = true;
var electron_1 = require("electron");
var app = electron_1.remote.app;
var BrowserWindow = electron_1.remote.BrowserWindow;
var Dialog = /** @class */ (function () {
    function Dialog(parent, locale) {
        this.width = 430;
        this.height = 120;
        this.parent = parent;
        var lc = locale ? locale : app.getLocale();
        switch (lc) {
            case 'ja':
            case 'en':
                this.locale = lc;
                break;
            default:
                this.locale = 'en';
        }
    }
    Dialog.prototype.openDialog = function () {
        var _this = this;
        if (this.win && !this.win.isDestroyed()) {
            this.win.show();
            this.win.focus();
            return;
        }
        // display center
        var bounds = this.parent.getBounds();
        var x = bounds.x + bounds.width / 2 - this.width / 2;
        var y = bounds.y + bounds.height / 2 - this.height / 2;
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
            fullscreenable: false
        });
        this.win.loadFile(__dirname + "/template/dialog-" + this.locale + ".html");
        // event
        this.win.webContents.on('did-finish-load', function () {
            _this.win.show();
            _this.win.focus();
        });
        this.win.on('close', function (event) {
            event.preventDefault();
            _this.win.hide();
        });
        this.win.on('closed', function () {
            _this.win = null;
        });
    };
    Dialog.prototype.closeDialog = function () {
        this.win.hide();
    };
    return Dialog;
}());
exports["default"] = Dialog;
