"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_model_1 = require("./product.model");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.data = new Array(new product_model_1.Product(1, "Kajak", "Sporty wodne", 275), new product_model_1.Product(2, "Kamizelka ratunkowa", "Sporty wodne", 48.95), new product_model_1.Product(3, "Piłka", "Piłka nożna", 19.50), new product_model_1.Product(4, "Flagi narożne", "Piłka nożna", 34.95), new product_model_1.Product(5, "Czapka", "Szachy", 16));
    }
    SimpleDataSource.prototype.getData = function () {
        return this.data;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
//# sourceMappingURL=datasource.model.js.map