import { Component, OnInit } from '@angular/core';
import people from '../../assets/people.json';

@Component({
  selector: 'app-women-page',
  templateUrl: './women-page.component.html',
  styleUrls: ['./women-page.component.css']
})
export class WomenPageComponent implements OnInit {
  //  read in the JSON File. 
  title = 'json-file';
  public people:{name:string, timePeriod:number, year:string, paragraph:string, photo:string}[] = people; 

  constructor() { }

  ngOnInit(): void {
  }

}
