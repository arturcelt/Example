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
var forms_1 = require("@angular/forms");
var limit_formvalidator_1 = require("./limit.formvalidator");
var ProductFormControl = /** @class */ (function (_super) {
    __extends(ProductFormControl, _super);
    function ProductFormControl(label, property, value, validator) {
        var _this = _super.call(this, value, validator) || this;
        _this.label = label;
        _this.modelProperty = property;
        return _this;
    }
    ProductFormControl.prototype.getValidationMessages = function () {
        var messages = [];
        if (this.errors) {
            for (var errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push("Prosz\u0119 poda\u0107 warto\u015B\u0107 w pou " + this.label + ".");
                        break;
                    case "minlength":
                        messages.push("Wymagane jest podanie przynajmniej  " + this.errors['minlength'].requiredLength + " znak\u00F3w.");
                        break;
                    case "maxlength":
                        messages.push("Mo\u017Cna wprowadzi\u0107 maksymalnie " + this.errors['maxlength'].requiredLength + " znak\u00F3w.");
                        break;
                    case "limit":
                        messages.push("Warto\u015B\u0107 maksymalna wynosi " + this.errors['limit'].limit + ".");
                        break;
                    case "pattern":
                        messages.push("Wprowadzone dane zawierają niedozwolone znaki.");
                        break;
                }
            }
        }
        return messages;
    };
    return ProductFormControl;
}(forms_1.FormControl));
exports.ProductFormControl = ProductFormControl;
var ProductFormGroup = /** @class */ (function (_super) {
    __extends(ProductFormGroup, _super);
    function ProductFormGroup() {
        return _super.call(this, {
            name: new ProductFormControl("Produkt", "name", "", forms_1.Validators.required),
            category: new ProductFormControl("Kategoria", "category", "", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[A-Za-z łżóąćźżśę]+$'), forms_1.Validators.minLength(3), forms_1.Validators.maxLength(80)])),
            price: new ProductFormControl("Cena", "price", "", forms_1.Validators.compose([forms_1.Validators.required, limit_formvalidator_1.LimitValidator.Limit(100), forms_1.Validators.pattern('^[0-9\.]+$')]))
        }) || this;
    }
    Object.defineProperty(ProductFormGroup.prototype, "productControls", {
        get: function () {
            var _this = this;
            return Object.keys(this.controls).map(function (k) { return _this.controls[k]; });
        },
        enumerable: true,
        configurable: true
    });
    ProductFormGroup.prototype.getFormValidationMessages = function (form) {
        var messages = [];
        this.productControls.forEach(function (c) { return c.getValidationMessages().forEach(function (m) { return messages.push(m); }); });
        return messages;
    };
    return ProductFormGroup;
}(forms_1.FormGroup));
exports.ProductFormGroup = ProductFormGroup;
//# sourceMappingURL=form.model.js.map