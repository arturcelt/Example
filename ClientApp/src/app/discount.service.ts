import { Injectable, Inject } from "@angular/core";
import { LogService } from "./log.service";


@Injectable()
export class DiscountService {
  private discountValue: number = 10;

  constructor(@Inject("logger") private logger: LogService) { }

  public get discount(): number {
    return this.discountValue;
  }

  public set discount(newValue: number) {
    this.discountValue = newValue || 0;
  }

  public applyDiscount(price: number) {
    this.logger.loginInfoMessage(`Rabat ${this.discount} dla ceny: ${price}`);
    return Math.max(price - this.discountValue, 5);
  }
}
