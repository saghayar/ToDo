import {Todo} from '../../../shared/todo';
import * as todoActions from '../actions/todo-list.actions';

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

export function todoListReducer(state = initState, action: todoActions.TodoListActions) {

    switch (action.type) {
        case todoActions.ADD_TODO:
            console.log('reducer :create:works');
            return {
                ...state,
                todos: [...state.todos, action.payload],
                selectedTodo: action.payload
            };
        case todoActions.SELECT_TODO:
            console.log('reducer :select:works');
            return {
                ...state,
                todos: [...state.todos],
                selectedTodo: action.payload
            };
        case todoActions.EDIT_TODO:
            console.log('edit :select:works');
            const todosNew = state.todos.map(todo => {
                if (action.payload.id === todo.id) {
                    return {
                        ...todo,
                        name: action.payload.name,
                        description: action.payload.description
                    };
                } else {
                    return todo;
                }
            });
            return {
                ...state,
                todos: todosNew
            };
        case todoActions.DELETE_TODO:
            const newTodos = state.todos.filter(todo => action.payload.id !== todo.id);
            // console.log({...state, todos: newTodos};
            return {
                ...state,
                todos: newTodos
            };
        default :
            return state;
    }
}
