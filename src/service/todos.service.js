import mockTodos from '../in-mem-storage/todos.mock'
export default class TodoService {
    _todos= mockTodos; // set mock todo
    addTodo = function(todo) {
        this._todo = [
            ...this._todo,
            todo
        ];
    };

    removeTodo = function(id) {

    };

    getTodos = function() {
        return this._todos;
    };

    getTodo = function(id) {

    };

    updateTodo = function(id, updateTodo) {

    }

}