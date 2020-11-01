import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { CommonModule } from '@angular/common';
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);

@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl-PL'
  }
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [ProductComponent, PaAttrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher, ProductTableComponent, ProductFormComponent, PaToggleView],
  bootstrap: [ProductComponent]
})
export class AppModule { }



