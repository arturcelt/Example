import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from "./components/productTable.component";
import { ProductFormComponent } from "./components/productForm.component";
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);
import { ModelModule } from "./model/model.module";
import { AppCommonModule } from "./common/common.module";
import { ComponentModule } from "./components/component.module";


@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl-PL'
  }
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, ModelModule, AppCommonModule, ComponentModule],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }



