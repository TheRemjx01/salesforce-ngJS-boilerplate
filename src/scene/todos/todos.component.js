import template from './todos.component.html';
// es-6 controller style
class TodosController {
   static get $inject() {
       return ['todosService']
   }

   $onInit() {
       console.log('TODOS CONTROLLER WORKS!')
   }
}

export default {
    template,
    controller: TodosController
}