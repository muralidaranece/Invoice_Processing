import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WordSearchComponent } from './word-search/word-search.component';
import { QuizComponent } from './quiz/quiz.component';
import { FourLettersComponent } from './four-letters/four-letters.component';
import { WordHuntComponent } from './word-hunt/word-hunt.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WordSearchComponent,
    QuizComponent,
    FourLettersComponent,
    WordHuntComponent,
    ScoreboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
