import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyInfo } from '../interfaces/currency.interface';

@Injectable({providedIn: 'root'})

export class CurrenciesService {
  constructor(private httpClient: HttpClient) { }

  getCurrencies(currency: string): Observable<CurrencyInfo> {
    return this.httpClient.get(`https://api.exchangerate.host/latest?base=${currency}&symbols=USD,EUR,UAH`) as Observable<CurrencyInfo>
  }
  
}