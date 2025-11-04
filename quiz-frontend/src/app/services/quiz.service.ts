import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class QuizService {
  base = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}
  getQuestions(level: number) { return this.http.get<any[]>(`${this.base}/questions/${level}`); }
}