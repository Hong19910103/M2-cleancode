"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getPerimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Cylinder.getBaseArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Cylinder.getVolume = function (radius, height) {
        var volume = this.getPerimeter(radius)
            * height + 2
            * this.getBaseArea(radius);
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
