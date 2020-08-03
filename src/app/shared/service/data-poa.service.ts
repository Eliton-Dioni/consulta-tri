import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataPoaService {
  //  Urls do DataPOA
  apiUrlLine = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=';
  apiUrlRoute = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(
    private httpClient: HttpClient
  ) { }
  // Funções para utilizar as urls
  public getBusList() {
    return this.httpClient.get<any[]>(`${this.apiUrlLine}o`);
  }

  public getMiniBusList() {
    return this.httpClient.get<any[]>(`${this.apiUrlLine}l`);
  }

  public getItinerary(id: number) {
    return this.httpClient.get<any[]>(`${this.apiUrlRoute}${id}`);
  }
}
