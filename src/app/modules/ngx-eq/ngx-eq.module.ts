import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEqDirective } from './ngx-eq.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxEqDirective
  ],
  exports: [
    NgxEqDirective
  ]
})
export class NgxEqModule { }
