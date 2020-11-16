import { Component, Input } from "@angular/core";
import { DiscountService } from "../common/discount.service";

@Component({
  selector: "paDiscountDisplay",
  template: `<div class="bg-info p-a-1">
Rabat wynosi {{discounter.discount}}
</div>`

})
export class paDiscountDisplayComponent {
  constructor(private discounter: DiscountService) { }
}

