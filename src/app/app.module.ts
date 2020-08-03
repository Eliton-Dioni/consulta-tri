import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { FooterModule } from './shared/modules/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataPoaService } from './shared/service/data-poa.service';
import { AppComponent } from './app.component';
import { BusListComponent } from './views/bus-list/bus-list.component';
import { MinibusListComponent } from './views/minibus-list/minibus-list.component';
import { ItineraryBusComponent } from './views/itinerary-bus/itinerary-bus.component';
import { ItineraryMinibusComponent } from './views/itinerary-minibus/itinerary-minibus.component';
import { Error404Component } from './views/error404/error404.component';

// Material Angular
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    MinibusListComponent,
    ItineraryBusComponent,
    ItineraryMinibusComponent,
    Error404Component,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    DataTablesModule,
    NavbarModule,
    FooterModule
  ],
  providers: [DataPoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
