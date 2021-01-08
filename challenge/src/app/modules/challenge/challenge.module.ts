import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { GeneratorComponent } from './components/generator/generator.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentsService } from './components/payments/services/payments.service';
import { GeneratorService } from './components/generator/services/generator.service';

import { ChallengeFacadeService } from './services/challhenge.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GeneratorComponent,
    PaymentsComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ChallengeRoutingModule,
    SharedModule
  ],
  providers: [
    GeneratorService,
    PaymentsService,
    ChallengeFacadeService
  ]
})
export class ChallengeModule { }
