import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MATERIAL_MODULES = [
  MatSliderModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatRadioModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatNativeDateModule,
  MatDatepickerModule,
  FormsModule,
  MatFormFieldModule,
  MatCheckboxModule, 
  MatInputModule,
 

]
@NgModule({

  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ]

})
export class AngularMaterialModule {

  // static forChild(): ModuleWithProviders {

  //   return {

  //     ngModule: AngularMaterialModule,

  //     providers: []

  //   };

  // }
}
