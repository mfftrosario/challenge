import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavLayoutComponent } from './core/layouts/side-nav-layout/side-nav-layout.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'challenge'
  }, {
    path: 'challenge',
    component: SideNavLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./modules/challenge/challenge.module').then(m => m.ChallengeModule),
    }]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

