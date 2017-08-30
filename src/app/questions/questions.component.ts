import { Component, OnInit } from '@angular/core';

const QUESTIONS = [
  {
    id: 1,
    question: 'First question is here?',
    answers: [
      {text: 'First answer is here', isCorrect: false},
      {text: 'Second answer is here', isCorrect: false},
      {text: 'Third answer is here', isCorrect: true},
      {text: 'Fifth answer is here', isCorrect: false}
    ]
  },
  {
    id: 2,
    question: 'Second question is here?',
    answers: [
      {text: 'First answer is here', isCorrect: true},
      {text: 'Second answer is here', isCorrect: false},
      {text: 'Third answer is here', isCorrect: false},
      {text: 'Fifth answer is here', isCorrect: false}
    ]
  },
  {
    id: 3,
    question: 'Third question is here?',
    answers: [
      {text: 'First answer is here', isCorrect: false},
      {text: 'Second answer is here', isCorrect: false},
      {text: 'Third answer is here', isCorrect: false},
      {text: 'Fifth answer is here', isCorrect: true}
    ]
  }

];


@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: any[];
  currentQuestionIndex: number;
  currentQuestion;

  constructor() { }

  ngOnInit() {
    // get questions via service
    this.questions = QUESTIONS;
    this.setCurrent(0);
  }

  setCurrent(idx: number): void {
    if (!this.questions[idx]) return;

    this.currentQuestionIndex = idx;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  next() {
    let newIdx = this.currentQuestionIndex + 1;

    if (newIdx >= this.questions.length)
      return;

    this.setCurrent(newIdx);
  }

  prev() {
    let newIdx = this.currentQuestionIndex - 1;

    if (newIdx < 0)
      return;

    this.setCurrent(newIdx);
  }
}
