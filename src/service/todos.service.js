import mockTodos from '../in-mem-storage/todos.mock'
export default class TodoService {
    _todos= mockTodos; // set mock todo
    addTodo = function(todo) {

        this._todos = [
            ...this._todos,
            todo
        ];
        console.log('ADD TODOS', this._todos);
    };

    removeTodo = function(id) {

    };

    getTodos = function() {
        return this._todos;
    };

    getTodo = function(id) {
        return this._todos.find(todo => todo.id === id);
    };

    toggleTodo = function(id) {
        this._todos = this._todos.map(item => {
            if (item.id === id) {item.isCompleted = !item.isCompleted}
            return item;
        });
    }

}