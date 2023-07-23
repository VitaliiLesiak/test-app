import { Component } from '@angular/core';
import { CurrencyInfo } from 'src/app/interfaces/currency.interface';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentInfo!: CurrencyInfo

  constructor(private currencyService: CurrenciesService) {
    this.getCurrency()
  }

  getCurrency() {
    this.currencyService.getCurrencies('UAH')
    .subscribe((data: CurrencyInfo) => {
      // delete data.rates[data.base]
      this.currentInfo = data
    })
  }
}
