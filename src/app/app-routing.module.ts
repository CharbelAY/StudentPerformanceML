import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionContainerComponent } from './question-container/question-container.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {path:"" , component:WelcomePageComponent},
  {path:"question" , component:QuestionContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
