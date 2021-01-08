import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChallengeFacadeService } from '../../services/challhenge.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {



  constructor (public challengefacade: ChallengeFacadeService) {

  }


  get numRows() {
    return Array(this.challengefacade.generatorService.numRows);
  }

  get time() {
    return this.challengefacade.generatorService.time;
  }

  get cells() {
    return this.challengefacade.generatorService.cells;
  }

  get result() {
    return this.challengefacade.generatorService.result;
  }


  start() {
    this.challengefacade.generatorService.started = true;
    this.challengefacade.generatorService.start();
    setInterval(() => {
      if (this.challengefacade.generatorService.form.disabled) {
        this.challengefacade.generatorService.form.enable();
      } else {
        if (this.challengefacade.generatorService.form.controls.search) {
          this.challengefacade.generatorService.form.disable();
        }
      }
    }, 4000);
  }


  ngOnInit(): void {
  }

}
