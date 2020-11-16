import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);
import { paDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ModelModule } from "./model/model.module";
import { AppCommonModule } from "./common/common.module";


@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl-PL'
  }
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, ModelModule, AppCommonModule],
  declarations: [ProductComponent, ProductTableComponent, ProductFormComponent, PaToggleView, paDiscountDisplayComponent, PaDiscountEditorComponent],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }



