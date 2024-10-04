// pricing.js
import { Currency } from './3-currency.js';

export class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency instanceof Currency ? currency : null;
  }

  get amount () {
    return this._amount;
  }

  set amount (value) {
    this._amount = value;
  }

  get currency () {
    return this._currency;
  }

  set currency (value) {
    if (value instanceof Currency) {
      this._currency = value;
    }
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
