import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()
  question: any = null;

  constructor() { }

  ngOnInit() {
  }

}
