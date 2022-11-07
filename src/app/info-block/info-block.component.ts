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
  @Input() photoUrl = '';
  constructor() { }

  ngOnInit(): void {
  }

}
