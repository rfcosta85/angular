import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuroCapitalsComponent } from './euro-capitals/euro-capitals.component';
import { MockComponent } from './mock/mock.component';

@NgModule({
  declarations: [AppComponent, EuroCapitalsComponent, MockComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
