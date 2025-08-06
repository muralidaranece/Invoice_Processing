import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../_models/word.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://your-api-url/api/game'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getWordSearchWords(level: string): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.apiUrl}/wordsearch?level=${level}`);
  }

  getQuizQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/quiz`);
  }

  getFourLetterWords(): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.apiUrl}/fourletters`);
  }

  getWordHuntWords(): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.apiUrl}/wordhunt`);
  }
}
