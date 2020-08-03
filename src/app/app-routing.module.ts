import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusListComponent } from './views/bus-list/bus-list.component'
import { MinibusListComponent } from './views/minibus-list/minibus-list.component'
import { ItineraryBusComponent } from './views/itinerary-bus/itinerary-bus.component';
import { ItineraryMinibusComponent } from './views/itinerary-minibus/itinerary-minibus.component'
import { Error404Component } from './views/error404/error404.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/linha-onibus', pathMatch: 'full'
  },
  {
    path: 'linha-onibus', component: BusListComponent,
  },
  {
    path: 'linha-lotacao', component: MinibusListComponent,
  },
  {
    path: 'itinerario-onibus/:id', component: ItineraryBusComponent,
  },
  {
    path: 'itinerario-lotacao/:id', component: ItineraryMinibusComponent,
  },
  {
    path: '**', component: Error404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
