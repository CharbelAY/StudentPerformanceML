import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  open_overlay(){
    document.getElementById("overlay").style.display = "block";
}

  close_overlay(){
    document.getElementById("overlay").style.display = "none";
}

  redirect(pagename:string){
    this.router.navigate(['/'+pagename]);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
