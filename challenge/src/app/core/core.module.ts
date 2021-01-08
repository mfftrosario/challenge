import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavLayoutComponent } from './layouts/side-nav-layout/side-nav-layout.component';


@NgModule({
  declarations: [
    SideNavLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule
    ],
})
export class CoreModule {
}
