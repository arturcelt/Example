import { Component, Output, EventEmitter, ViewEncapsulation, Inject, SkipSelf } from "@angular/core";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";
import { Model } from "./repository.model";
import { VALUE_SERVICE } from "./valueDisplay.directive";
import { LogService } from "./log.service";

@Component({
  selector: "paProductForm",
  templateUrl: "productForm.component.html",
  viewProviders: [{ provide: VALUE_SERVICE, useValue: "pomarańcze" }],
  providers: [LogService]
  
  
})
export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  constructor(private model: Model, @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string) { console.log("Wartość usługi: " + serviceValue); }

  //@Output("paNewProduct")
  //newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      //this.newProductEvent.emit(this.newProduct);
      this.model.saveProduct(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }

}
