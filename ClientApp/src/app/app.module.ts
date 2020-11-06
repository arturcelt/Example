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
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { paDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model";
import { LogService, LOG_SERVICE, SpecjalLogService } from "./log.service";
 

@NgModule({
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl-PL'
  }, { provide: LOG_SERVICE, useClass: SpecjalLogService },
    DiscountService, SimpleDataSource, Model
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [ProductComponent, PaAttrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher, ProductTableComponent, ProductFormComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe, paDiscountDisplayComponent, PaDiscountEditorComponent, PaDiscountPipe, PaDiscountAmountDirective],
  bootstrap: [ProductComponent]
})
export class AppModule { }



