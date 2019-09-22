import { Component, OnInit } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {

  Answers:Array<Object>=[];

    Questionaire:Array<Object>= [
    {
      'question':"Which statement is true ?",
      'answers':[
        "More than one of my grandparents has a university degree",
        "One of my grandparents has a university degree",
        "Both my parents have a university degree",
        "One of my parents has a university degree",
        "None of my parents have a university degree",
      ],
    },
    {
      'question':"Do you have older siblings?  ",
      'answers':[
        "Yes",
        "No"
      ]
    },
    {
      'question':"Do you have siblings or close relative that are in the field of your studies? ",
      'answers':[
        "Yes",
        "No"
      ]
    },
    {
      'question':"Do you have your own room in your house? ",
      'answers':[
        "Yes",
        "No"
      ]
    },
    {
      'question':"When do you sleep most of the time? ",
      'answers':[
        "Before 10", 
        "Before 12", 
        "After 2", 
        "My sleep behavior is very messy" 
      ]
    },
    {
      'question':"Are you religious? ",
      'answers':[
        "Yes",
        "No",
        "Not sure" 
      ]
    },
    {
      'question':"Do you often practice sports? ",
      'answers':[
        "Yes",
        "No"
      ]
    },
    {
      'question':'What best describes your family financially? ',
      'answers':[
        "We can buy a 30 000$ car by cash there is no problem",
        "Most probably we will have to take a loan", 
        "No way"  
      ]
    },
    {
      'question':"What school did you attend",
      'answers':[
        "A school that is strongly French (Bac Francais is a real thing amongst students)",
        "A mixed school (Bac francais is somewhat popular)",
        "Bac Francais Who?"
      ]
    },
    {
      'question':"What is the area of your house? ",
      'answers':[
        "Less than 100 m2", 
        "Between 100 and 250 m2", 
        "More than 250 m2" 
      ]
    },
    {
      'question':"Do your parents use emails daily? ",
      'answers':[
        "Yes, the use it for work",
        "Rarely",
        "Not that much" 
      ]
    },
    {
      'question':"How do you Identify yourself? ",
      'answers':[
        "Straight",
        "LGBTQ+",
        "Not Sure" 
      ]
    },
    {
      'question':"How would you rate yourself in general knowledge? ",
      'answers':[
        "Excellent",
        "Good",
        "Bad" 
      ]
    },
    {
      'question':"On a scale of 1 to 5 how beautiful do you view yourself? ",
      'answers':[
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    {
      'question':"On a scale of 1 to 5 how confident in life are you? ",
      'answers':[
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    {
      'question':"Choose one person: ",
      'answers':[
        "Albert Einstein",
        "Steve Jobs",
        "Nelson Mandela"  
      ]
    },
    {
      'question':"On a scale of 1 to 5 how socially skilled do you consider yourself? ",
      'answers':[
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    {
      'question':"What music would you rather hear the most? ",
      'answers':[
        "Commercial Pop", 
        "Classical Music",
        "Rock",
        "Other"
      ]
    },
    {
      'question':"On a scale of 1 to 5 how much do you compare yourself to others and envy them sometimes ",
      'answers':[
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    {
      'question':"How would you describe yourself? ",
      'answers':[
        "I hack the system",
        "I abide by the rules and follow the traditional ways that have been working for many years",
        "Revolutionary and angry I find bad things in the system and I just can’t force myself and follow them to the letter" 
      ]
    },
    {
      'question':"Parenting Style? ",
      'answers':[
        "Authoritarian",
        "Permissive",
        "Uninvolved" 
      ]
    },
    {
      'question':"Where both your parents present during your childhood and adolescence? ",
      'answers':[
        "Yes",
        "No",
        "Complicated" 
      ]
    },
    {
      'question':"Do you play a musical instrument? ",
      'answers':[
        "Yes",
        "No"
      ]
    },
    {
      'question':"Any extracurricular activities? ",
      'answers':[
        "Yes",
        "No"
      ]
    },
    {
      'question':"How many hours do you study per day? ",
      'answers':[
        "less than 1 hour",
        "between 1 and 2 hours",
        "more than 2 hours"
      ]
    },
    {
      'question':"Would you rather study at home or focus in class? ",
      'answers':[
        "Study at home",
        "Focus in class"
      ]
    }
  ];

  loge(answer,question){;
    this.Answers[question]=answer;
    console.log(this.Answers);
  }
  constructor(private scrollDispatcher: ScrollDispatcher,private router:Router, private _snackBar: MatSnackBar) { 
    this.scrollDispatcher.scrolled().subscribe(x => this.scrollProgress());

  }

  checkAndSend(){
    if(Object.keys(this.Answers).length==26){
      this.router.navigate(['/']);
    }else{
      this._snackBar.open("Please answer all questions before submitting",'',{duration:1000,});

    }
  }

  scrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  ngOnInit() {
  }
}
