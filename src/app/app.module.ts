import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InplayComponent } from '@components/inplay/inplay.component';
import { EventComponent } from '@components/event/event.component';
import { MarketComponent } from '@components/market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    InplayComponent,
    EventComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
