import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import { DataPoaService } from '../../shared/service/data-poa.service';

@Component({
  selector: 'app-itinerary-bus',
  templateUrl: './itinerary-bus.component.html',
  styleUrls: ['./itinerary-bus.component.css']
})
export class ItineraryBusComponent implements OnInit {
  itineraryBusList: Array<any>;

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dataPoaService: DataPoaService
  ) {
    iconRegistry.addSvgIcon('bus', sanitizer.bypassSecurityTrustResourceUrl('assets/img/bus.svg'));
    iconRegistry.addSvgIcon('theme-light', sanitizer.bypassSecurityTrustResourceUrl('assets/img/theme-light.svg'));
    iconRegistry.addSvgIcon('back', sanitizer.bypassSecurityTrustResourceUrl('assets/img/back.svg'));
  }

  ngOnInit(): void {
    this.getListItinerary();
  }

  handleBus() {
    this.router.navigate(['linha-onibus']);
  }
  // A partir do snapshot do usuário, obtém os dados da api e salva no itineraryBusList,
  // O qual utilizaremos no datatable
  getListItinerary(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.dataPoaService.getItinerary(id).subscribe(data => this.itineraryBusList = data);
  }
}
