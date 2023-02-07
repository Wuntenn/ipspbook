import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InplayComponent } from '@components/inplay/inplay.component';
import { EventComponent } from '@components/event/event.component';
import { MarketComponent } from '@components/market/market.component';

// development
import { InplayEventComponent } from '@components/inplay/inplay-event/inplay-event.component'
import { MarketEventComponent } from '@components/market/market-event/market-event.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component:InplayComponent },
  { path: 'event', component: EventComponent },
  { path: 'market/:marketId', component: MarketComponent },
  // Development routes - allow me to adjust without the events
  /*
  { path: 'mev', component: MarketEventComponent},
  { path: 'iev', component:InplayEventComponent },
  */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
