import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BindCssVariableDirective } from './bind-css-variable.directive';
import { ExmapleComponent } from './exmaple/exmaple.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BindCssVariableDirective, ExmapleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
