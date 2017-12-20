import {Todo} from '../../../shared/todo';
import {ADD_TODO, EDIT_TODO, SELECT_TODO, TodoListActions} from '../actions/todo-list.actions';

export interface State {
  todos: Todo[];
  selectedTodo: Todo;
}

const initState: State = {
  todos: [
    new Todo(1, 'Birthday Party', ' Birthday party for my friend'),
    new Todo(2, 'Hackaton event', 'Event for challaing up Java ME'),
    new Todo(3, 'Finishing up angular staffs', 'Learning Angular features for project')
  ],
  selectedTodo: new Todo(1, 'Birthday Party', ' Birthday party for my friend')
};

export function todoListReducer(state = initState, action: TodoListActions) {

  switch (action.type) {
    case ADD_TODO:
      console.log('reducer :create:works');
      return {
        ...state,
        todos: [...state.todos, action.payload],
        selectedTodo: action.payload
      };
    case SELECT_TODO:
      console.log('reducer :select:works');
      return {
        ...state,
        todos: [...state.todos],
        selectedTodo: action.payload
      };
    case EDIT_TODO:
      console.log('edit :select:works');
      return {
        ...state,
        todos: [...state.todos, action.payload],
        selectedTodo: action.payload
      }
    default :
      return state;
  }
}
