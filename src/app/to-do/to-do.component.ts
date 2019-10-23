import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

interface IToDo {
  id: number;
  content: string;
  complete: boolean;
}

let idNumber = 1;

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<IToDo> = [];

  constructor() {
  }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: IToDo = {
        id: idNumber++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
