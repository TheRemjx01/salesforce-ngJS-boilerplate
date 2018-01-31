import template from './todos.component.html';
// es-6 controller style
class TodosController {
    todos;
    newTodo = {title: '', description: ''};
   static get $inject() {
       return ['todosService']
   }
   constructor(todosService) {
       this.todosService = todosService;
       // console.log('TODOS SERVICE: ', this.todosService);
   }

   $onInit() {
       // console.log('TODOS CONTROLLER WORKS!');
       // console.log('TODOS LIST: ', this.todosService.getTodos());
       this.todos = this.todosService.getTodos();
       console.log('THIS TODOS: ', this.todos);
   }

   onTodoClick(id) {
       this.todosService.toggleTodo(id);
       this.todos = this.todosService.getTodos();
   }

   addTodo() {
       this.todosService.addTodo(this.newTodo);
       this.todos = this.todosService.getTodos();
       console.log('MY NEW TODOS: ', this.todos);
   }

   viewTodo(id) {
       this.editTodo = this.todosService.getTodo(id);
       console.log('EDIT TODO: ', this.editTodo);
   }
}

export default {
    template,
    controller: TodosController,
    controllerAs: '$ctrl'
}