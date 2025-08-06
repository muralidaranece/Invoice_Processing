import { Component, OnInit } from '@angular/core';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  quizCompleted: boolean = false;
  selectedOption: string | null = null;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadQuizQuestions();
  }

  loadQuizQuestions(): void {
    this.gameService.getQuizQuestions().subscribe((data) => {
      this.questions = data;
    });
  }

  selectOption(option: string): void {
    if (this.selectedOption) return; // Prevent re-selection

    this.selectedOption = option;
    const currentQuestion = this.questions[this.currentQuestionIndex];

    if (option === currentQuestion.correctOption) {
      this.score++;
    }

    setTimeout(() => {
      this.nextQuestion();
    }, 1000);
  }

  nextQuestion(): void {
    this.selectedOption = null;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizCompleted = true;
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
    this.selectedOption = null;
    this.loadQuizQuestions();
  }
}
