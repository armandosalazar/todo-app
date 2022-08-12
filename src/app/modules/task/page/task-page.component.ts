import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {
  showText: boolean = true;
  // readonly menu: Array<string> = ['Item 1', 'Item 2', 'Item 3'];
  readonly menu: Array<string> = [];
  case: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeText(): void {
    this.showText = !this.showText;
  }
}
