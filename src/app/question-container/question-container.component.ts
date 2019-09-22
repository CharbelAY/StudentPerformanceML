import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {

    Questionaire:Array<Object>= [
    {
      'question':"Which statement is true ?",
      'answers':[
        "More than one of my grandparents has a university degree",
        "One of my grandparents has a university degree",
        "Both my parents have a university degree",
        "One of my parents has a university degree",
        "None of my parents have a university degree",
      ]
    },
    {
      'question':"Do you have older siblings?  ",
      'answers':[
        "Yes",
        "No"
      ]
    },
  ];

  loge(selected){
    console.log(selected);
  }
  constructor() { }

  ngOnInit() {
  }
}
