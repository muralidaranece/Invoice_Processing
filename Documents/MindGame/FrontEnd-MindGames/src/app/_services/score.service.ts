import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score } from '../_models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private apiUrl = 'https://your-api-url/api/score'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  saveScore(score: Score): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, score);
  }

  getUserScores(userId: number): Observable<Score[]> {
    return this.http.get<Score[]>(`${this.apiUrl}/user/${userId}`);
  }

  getLeaderboard(gameType: string): Observable<Score[]> {
    return this.http.get<Score[]>(`${this.apiUrl}/leaderboard/${gameType}`);
  }
}
