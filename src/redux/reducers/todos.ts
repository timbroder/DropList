import {ADD_TODO, DELETE_TODO, DELETE_TODOS, TOGGLE_TODO} from "../actionTypes";
import {maxProp} from "../../utils/number";
import {itemSort, todoSort} from "../../utils/array";

const initialTodos = [];

export default function(state = initialTodos, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: maxProp(state, 'id') + 1,
                    name: action.payload.name,
                    sort: maxProp(state, 'sort') + 1,
                    listId: action.payload.listId,
                    completed: false
                }
            ].sort(todoSort);
        }
        case DELETE_TODOS: {
            return state.filter(todo => todo.listId != action.payload);
        }
        case DELETE_TODO: {
            return state.filter(todo => todo.id != action.payload);
        }
        case TOGGLE_TODO: {
            return state.map(todo =>
                todo.id === action.payload ? {
                    ...todo,
                    completed: !todo.completed,
                    sort: !todo.completed ? maxProp(state, 'sort') + 1 : todo.sort
            } : todo
            )
        }
        default:
            return state;
    }
}
