import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  category:any;
  @Input() showCard?:boolean;



  @Output() detailEvent:EventEmitter<any> = new EventEmitter<any>();
  onDetail(){
    this.detailEvent.emit();
  }






  constructor() { }

  ngOnInit(): void {
  }

}
