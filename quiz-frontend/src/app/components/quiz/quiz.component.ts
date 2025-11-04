import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  template: `
  <div style="padding:16px">
    <h3>Level {{level}} Quiz</h3>
    <button (click)="start()">Load Questions</button>

    <div *ngIf="questions.length">
      <div *ngFor="let q of questions; let i = index" 
           style="border:1px solid #ddd;padding:8px;margin:8px 0;border-radius:10px;">
        <p><strong>{{i+1}}.</strong> {{q.text}}</p>
        <div *ngFor="let key of ['optionA','optionB','optionC','optionD']">
          <label>
            <input type="radio" name="q{{i}}" (change)="answer(i,key)" /> {{q[key]}}
          </label><br/>
        </div>
      </div>
      <button (click)="submit()" style="margin-top:10px;">Submit</button>
    </div>
  </div>`
})
export class QuizComponent {
  level = 1;
  questions: any[] = [];
  answers: any[] = [];

  constructor(private qs: QuizService){}

  start(){
    this.qs.getQuestions(this.level).subscribe(q => this.questions = q);
  }

  answer(i:number, optKey:string){
    const selected = optKey.slice(-1).toUpperCase(); // 'optionA' -> 'A'
    this.answers[i] = {
      questionId: this.questions[i].id,
      selectedOption: selected,
      timeTaken: 15
    };
  }

  submit(){
    alert('Quiz submitted! (Demo)');
    console.log(this.answers);
  }
  }
