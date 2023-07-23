import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyInfo } from 'src/app/interfaces/currency.interface';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  CurrentInfo!: CurrencyInfo
  checkCurrencyFirst: FormGroup = new FormGroup({
    "changeSum": new FormControl(1),
    "select": new FormControl('EUR'),
  })
  checkCurrencySecond: FormGroup = new FormGroup({
    "changeSum": new FormControl(1),
    "select": new FormControl('UAH'),
  })
  

  constructor(private currencyService: CurrenciesService) {
    this.getCurrency()
    this.check(this.checkCurrencyFirst.controls, this.checkCurrencySecond.controls)
  }
  getCurrency() {
    this.currencyService.getCurrencies(this.checkCurrencyFirst.value.select)
    .subscribe((data: CurrencyInfo) => {
      this.CurrentInfo = data
    })
  }
  

  check(formCurrent: any, formCurrentTwo: any) {
    this.currencyService.getCurrencies(formCurrent.select.value)
      .subscribe(data => {
        Object.keys(data.rates).forEach(el => {
          const sum = formCurrent.changeSum.value * data.rates[el];
          el === formCurrentTwo.select.value ? formCurrentTwo.changeSum.setValue(sum.toFixed(2)) : null;
        })
      });
  }
}
