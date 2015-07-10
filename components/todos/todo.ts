/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {TodoItem} from '../../models/todo'


@Component({
    selector: 'todo-items'
})
@View({
    template: `
    <h2><p>TODO list:</p></h2>

    <ul>
       <li *ng-for="#todo of todos">
         {{ todo.title }}
       </li>
    </ul>

    <input #todotext (keyup)="doneTyping($event)">
    <button (click)="addTodo(todotext.value); todotext.value=null">Add Todo</button>
`,
    directives: [NgFor]
})
export class TodoComponent {
    todos: Array<TodoItem>;

    constructor() {
        this.todos = [new TodoItem(1, "Eat Breakfast"), new TodoItem(2, "Walk Dog"), new TodoItem(3, "Breathe")];
    }

    addTodo(todo: string) {
        this.todos.push(new TodoItem(new Date().getTime(), todo));
    }

    doneTyping($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    }
}