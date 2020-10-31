import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { NgForm } from "@angular/forms";
import { ProductFormGroup } from "./form.model";


@Component({
  selector: "app-root",
  templateUrl: "template.html",
  
})
export class ProductComponent {
  model: Model = new Model();
  


  addProduct(product: Product) {
    this.model.saveProduct(product);
  }

}





