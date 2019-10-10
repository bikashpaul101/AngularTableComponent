import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data;
  @Input() datacolumn;
  dataset:any=[];
  coloumnset:any=[];
  constructor() { }
  ngOnInit() {
    this.dataset=this.data;
    this.coloumnset=this.datacolumn;
    console.log(this.dataset,this.coloumnset);
    
  }

}
