import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChallengeFacadeService } from '../../services/challhenge.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {


  form = new FormGroup({
    search: new FormControl(this.challengefacade.generatorService.search)
  });


  constructor (private challengefacade: ChallengeFacadeService) {

    this.form.controls.search.valueChanges.subscribe(w => {
      if (this.challengefacade.generatorService.search !== w) {
        this.challengefacade.generatorService.search = w;
        if (this.challengefacade.generatorService.started && w) {
          this.challengefacade.generatorService.generateCells();
        }
      }
    })
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
      if (this.form.disabled) {
        this.form.enable();
      } else {
        if (this.challengefacade.generatorService.search) {
          this.form.disable();
        }
      }
    }, 4000);
  }


  ngOnInit(): void {
  }

}
