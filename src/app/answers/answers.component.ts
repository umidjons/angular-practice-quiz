import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input()
  answers: any[] = [];

  @Input()
  questionId: number;

  constructor() { }

  ngOnInit() {
  }

}
