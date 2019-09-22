import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {

  typesOfShoes: string[] = [
    "More than one of my grandparents has a university degree",
    "One of my grandparents has a university degree",
    "Both my parents have a university degree",
    "One of my parents has a university degree",
    "None of my parents have a university degree",
  ];


  constructor() { }

  ngOnInit() {
  }

}
