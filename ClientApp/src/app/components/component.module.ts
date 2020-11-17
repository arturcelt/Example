import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { paDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { AppCommonModule } from "../common/common.module";


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, AppCommonModule],
  declarations: [paDiscountDisplayComponent, PaDiscountEditorComponent, ProductTableComponent, ProductFormComponent],
  exports: [ProductTableComponent, ProductFormComponent]
})
export class ComponentModule { }
