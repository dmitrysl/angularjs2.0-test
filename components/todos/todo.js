/// <reference path="../../typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var todo_1 = require('../../models/todo');
var TodoComponent = (function () {
    function TodoComponent() {
        this.todos = [new todo_1.TodoItem(1, "Eat Breakfast"), new todo_1.TodoItem(2, "Walk Dog"), new todo_1.TodoItem(3, "Breathe")];
    }
    TodoComponent.prototype.addTodo = function (todo) {
        this.todos.push(new todo_1.TodoItem(new Date().getTime(), todo));
    };
    TodoComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoComponent = __decorate([
        angular2_1.Component({
            selector: 'todo-items'
        }),
        angular2_1.View({
            template: "\n    <h2><p>TODO list:</p></h2>\n\n    <ul>\n       <li *ng-for=\"#todo of todos\">\n         {{ todo.title }}\n       </li>\n    </ul>\n\n    <input #todotext (keyup)=\"doneTyping($event)\">\n    <button (click)=\"addTodo(todotext.value); todotext.value=null\">Add Todo</button>\n",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
})();
exports.TodoComponent = TodoComponent;
