import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coin } from '../models/coin';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.apiUrl);
  }
}
