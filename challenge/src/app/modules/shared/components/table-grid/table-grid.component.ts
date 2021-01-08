import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent implements OnInit {

  constructor () { }

  @Input() numRows: number;
  @Input() cells: any[] = [];

  ngOnInit(): void {
  }

}
