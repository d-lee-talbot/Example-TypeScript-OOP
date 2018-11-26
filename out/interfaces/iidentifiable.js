"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Id = /** @class */ (function () {
    function Id() {
    }
    Id.NextId = function () {
        return ++this.id;
    };
    Id.id = 0;
    return Id;
}());
exports.Id = Id;
