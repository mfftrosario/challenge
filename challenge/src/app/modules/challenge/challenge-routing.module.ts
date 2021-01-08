import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaymentsComponent } from './components/payments/payments.component';
import { GeneratorComponent } from './components/generator/generator.component';


const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'generator'
}, {
  path: 'generator',
  component: GeneratorComponent
},
{
  path: 'payments',
  component: PaymentsComponent
},

{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'generator'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeRoutingModule { }
