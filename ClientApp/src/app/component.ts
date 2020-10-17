import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { NgForm } from "@angular/forms";
import { ProductFormGroup } from "./form.model";


@Component({
  selector: "app-root",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  //getFormValidationMessages(form: NgForm): string[] {
  //  let messages: string[] = [];
  //  Object.keys(form.controls).forEach(k => {
  //    this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
  //  });
  //  return messages;
  //}

  
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  //selectedProduct: string;

  //getSelected(product: Product) {
  //  return product.name == this.selectedProduct;
  //}

  newProduct: Product = new Product();

  get JSONProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(product: Product) {
    console.log("Nowy produkt: " + this.JSONProduct);
  }

  //getValidationMessages(state: any, thingName?: string) {
  //  let thing: string = state.path || thingName;
  //  let messages: string[] = [];
  //  if (state.errors) {
  //    for (let errorName in state.errors) {
  //      switch (errorName) {
  //        case "required":
  //          messages.push(`Proszę podać ${thing}.`);
  //          break;
  //        case "minlength":
  //          messages.push(`Wymagane jest podanie przynajmniej ${state.errors['minlength'].requiredLength} znaków.`);
  //          break;
  //        case "pattern":
  //          messages.push(`Wprowazone dane zawierają niedozwolone znaki.`);
  //          break;
  //      }
  //    }
  //  }
  //  return messages;
  //}




}



