"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./item");
var iidentifiable_1 = require("../interfaces/iidentifiable");
var Survey = /** @class */ (function (_super) {
    __extends(Survey, _super);
    function Survey(active, name) {
        var _this = _super.call(this, active, name) || this;
        _this.id = iidentifiable_1.Id.NextId();
        _this.questions = [];
        return _this;
    }
    Survey.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    Survey.prototype.toString = function () {
        return "Survey " + this.id + ") " + this.name;
    };
    return Survey;
}(item_1.Item));
exports.Survey = Survey;
