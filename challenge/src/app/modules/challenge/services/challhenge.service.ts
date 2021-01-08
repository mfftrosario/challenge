import { Injectable, Injector } from '@angular/core';
import { GeneratorService } from '../components/generator/services/generator.service';
import { PaymentsService } from '../components/payments/services/payments.service';

@Injectable()
export class ChallengeFacadeService {
  private _generatorService: GeneratorService;
  private _paymentsService: PaymentsService

  constructor (private injector: Injector) { }

  public get generatorService(): GeneratorService {
    return this._generatorService ? this._generatorService : this._generatorService = this.injector.get(GeneratorService);
  }

  public get paymentsService(): PaymentsService {
    return this._paymentsService ? this._paymentsService : this._paymentsService = this.injector.get(PaymentsService);
  }
}
