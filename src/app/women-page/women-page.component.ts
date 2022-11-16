import { Component, OnInit } from '@angular/core';
import people from '../../assets/people.json';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';

@Component({
  selector: 'app-women-page',
  templateUrl: './women-page.component.html',
  styleUrls: ['./women-page.component.css']
})
export class WomenPageComponent implements OnInit { 
  panelOpenState = false;
  //  read in the JSON File. 
  title = 'json-file';
  public people:{name:string, timePeriod:number, year:string, paragraph:string, photo:string, source:string}[] = people; 
  constructor() { }
  ngOnInit(): void {
  }
  getPeople(period: number){
    let peopleByPeriod = [];
    for(let person of this.people){
      if(person.timePeriod == period){
        peopleByPeriod.push(person);
      }
    }
    return peopleByPeriod;
  }

}
