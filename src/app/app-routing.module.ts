import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InplayComponent } from './components/inplay/inplay.component';
import { EventComponent } from './components/event/event.component';
import { MarketComponent } from './components/market/market.component';

const routes: Routes = [
  { path: 'inplay', component: InplayComponent },
  { path: 'event', component: EventComponent },
  { path: 'market', component: MarketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
