import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoundNumPipe } from './round-num.pipe';
import { DoubleNumsPipe } from './double-nums.pipe';
import { SortPersonPipe } from './sort-person.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoundNumPipe,
    DoubleNumsPipe,
    SortPersonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
