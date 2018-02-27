import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxEqModule } from './modules/ngx-eq/ngx-eq.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxEqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
