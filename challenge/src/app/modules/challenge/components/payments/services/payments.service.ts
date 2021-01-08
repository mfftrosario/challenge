import { Injectable } from '@angular/core';


@Injectable()

export class PaymentsService {


  paymentslist: any[] = [];

  constructor () {

  }

  get list() {
    return this.paymentslist;
  }

  addItemToList(obj) {
    if (obj) {
      this.paymentslist.push(obj);
    }
  }


}
