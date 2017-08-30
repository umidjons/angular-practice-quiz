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
  }
];


@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.questions = QUESTIONS;
    console.log('questions:', this.questions);
  }

}
