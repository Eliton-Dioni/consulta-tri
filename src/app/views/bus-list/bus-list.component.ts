import { Component, OnInit } from '@angular/core';
import { DataPoaService } from 'src/app/shared/service/data-poa.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})


export class BusListComponent implements OnInit {
  busList: Array<any>;

  constructor(
    public dataPoaService: DataPoaService
  ) { }

  ngOnInit(): void {
    this.getListBus();
  }
  // Obtém os dados da api e salva no busList, o qual utilizaremos no datatable
  getListBus() {
    this.dataPoaService.getBusList().subscribe(data => this.busList = data);
  }
}
