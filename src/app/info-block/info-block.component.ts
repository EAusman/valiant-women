import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent implements OnInit {  
  @Input() name = ''
  @Input() timePeriod = 0;
  @Input() date = '';
  @Input() paragraph = '';
  @Input() photoUrl = 'https://i.pinimg.com/originals/34/a6/c5/34a6c57f16c9c440dc479679c7ad2ad0.png';
  @Input() link = 'https://material.angular.io/components/card/examples';
  constructor() { }

  ngOnInit(): void {
  }

}
