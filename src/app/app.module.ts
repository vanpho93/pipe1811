import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoundNumPipe } from './round-num.pipe';
import { DoubleNumsPipe } from './double-nums.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoundNumPipe,
    DoubleNumsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
