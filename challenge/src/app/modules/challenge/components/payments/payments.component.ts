import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChallengeFacadeService } from '../../services/challhenge.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {



  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  });

  constructor (private challengefacade: ChallengeFacadeService) {
  }

  get numRows() {
    return Array(this.challengefacade.generatorService.numRows);
  }
  get time() {
    return this.challengefacade.generatorService.time;
  }

  get result() {
    return this.challengefacade.generatorService.result;
  }

  get list() {
    return this.challengefacade.paymentsService.list;
  }

  add() {
    if (this.form.valid) {
      let obj = this.form.getRawValue();
      obj.code = this.result ? this.result[0] + '' + this.result[1] : '00';
      obj.grid = this.challengefacade.generatorService.cells;
      obj.time = this.challengefacade.generatorService.time;
      this.challengefacade.paymentsService.addItemToList(obj);
    }
  }


  ngOnInit(): void {
  }

}
