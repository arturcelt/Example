import { NgModule, LOCALE_ID } from '@angular/core';
import { ProductTableComponent } from "./components/productTable.component";
import { ProductFormComponent } from "./components/productForm.component";
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);
import { ComponentModule } from "./components/component.module";


@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl-PL'
  }
  ],
  imports: [ComponentModule],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }



