import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { paDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [paDiscountDisplayComponent, PaDiscountEditorComponent, ProductTableComponent, ProductFormComponent],
  exports: [ProductTableComponent, ProductFormComponent]
})
export class ComponentModule { }
