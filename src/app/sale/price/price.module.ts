import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
//https://stackblitz.com/edit/ng2-pdf-viewer?file=src%2Fapp%2Fapp.module.ts
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [PriceComponent],
  imports: [
    CommonModule,
    PriceRoutingModule,
    PdfViewerModule,
  ]
})
export class PriceModule { }
