import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { WordSearchComponent } from "./word-search/word-search.component";
import { QuizComponent } from "./quiz/quiz.component";
import { FourLettersComponent } from "./four-letters/four-letters.component";
import { WordHuntComponent } from "./word-hunt/word-hunt.component";
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'word-search', component: WordSearchComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'four-letters', component: FourLettersComponent },
  { path: 'word-hunt', component: WordHuntComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }