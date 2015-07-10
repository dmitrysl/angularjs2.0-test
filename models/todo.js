var TodoItem = (function () {
    function TodoItem(id, title) {
        this.id = id;
        this.title = title;
    }
    TodoItem.prototype.toString = function () {
        return this.title;
    };
    return TodoItem;
})();
exports.TodoItem = TodoItem;
