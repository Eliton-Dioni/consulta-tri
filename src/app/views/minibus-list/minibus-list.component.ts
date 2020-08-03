import { Component, OnInit, ViewChild } from '@angular/core';
import { DataPoaService } from 'src/app/shared/service/data-poa.service';

@Component({
  selector: 'app-minibus-list',
  templateUrl: './minibus-list.component.html',
  styleUrls: ['./minibus-list.component.css']
})
export class MinibusListComponent implements OnInit {
  miniBusList: Array<any>;

  constructor(
    public dataPoaService: DataPoaService
  ) { }

  ngOnInit(): void {
    this.getListMiniBus();
  }
  // Obtém os dados da api e salva no MiniBusList, o qual utilizaremos no datatable
  getListMiniBus() {
    this.dataPoaService.getMiniBusList().subscribe(data => this.miniBusList = data);
  }
}
