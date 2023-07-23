import { FormControl } from "@angular/forms";

export interface CurrencyInfo {
  base: string;
  date: Date;
  motd: {
    msg: string;
    url: string;
  };
  rates: {
    [x: string]: any;
    USD: number
    UAH: number
    EUR: number
  };
}
export interface CarrencyForm {
  changeSum: FormControl
  select: FormControl
}