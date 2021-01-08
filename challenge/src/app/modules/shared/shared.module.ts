import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableGridComponent } from './components/table-grid/table-grid.component';


@NgModule({
  declarations: [
    TableGridComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TableGridComponent
  ]

})
export class SharedModule { }
