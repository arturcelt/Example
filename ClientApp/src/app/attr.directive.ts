import { Directive, ElementRef, Attribute, Input, SimpleChange, Output, EventEmitter, HostListener, HostBinding } from "@angular/core";
import { Product } from "./model/product.model";

@Directive({
  selector: "[pa-attr]"
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener("click", e => {
      if (this.product != null) {
        this.click.emit(this.product.category);
      }
    });
  }

  @Input("pa-attr")
  @HostBinding("class")
  bgClass: string;

  @Input("pa-product")
  product: Product;

  @Output("pa-category")
  click = new EventEmitter<string>();

  @HostListener("click")
  triggerCustomerEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }

}
