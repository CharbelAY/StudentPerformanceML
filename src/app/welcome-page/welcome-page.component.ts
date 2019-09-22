import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';





@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent implements OnInit {

  hide = true;


  open_overlay(){
    document.getElementById("overlay").style.display = "block";
}

  close_overlay(){
    document.getElementById("overlay").style.display = "none";
}

  redirect(pagename:string, value){
    if(value=="samir"){
      this.router.navigate(['/'+pagename]);
    }else{
      this._snackBar.open("Bad Password",'',{duration:1000,});
  }
}

  constructor(private router:Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
