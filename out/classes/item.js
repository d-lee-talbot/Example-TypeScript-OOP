"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(active, name) {
        this.active = active;
        this.name = name;
    }
    Item.prototype.toString = function () {
        return this.name;
    };
    return Item;
}());
exports.Item = Item;
