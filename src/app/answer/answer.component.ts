import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input()
  answer: any;

  @Input()
  questionId: number;

  constructor() { }

  ngOnInit() {
  }

}
