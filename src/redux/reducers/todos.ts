import {ADD_TODO, DELETE_TODO, DELETE_TODOS} from "../actionTypes";
import {maxProp} from "../../utils/number";
import {itemSort} from "../../utils/array";

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
                    listId: action.payload.listId
                }
            ].sort(itemSort);
        }
        case DELETE_TODOS: {
            return state.filter(item => item.listId != action.payload);
        }
        case DELETE_TODO: {
            return state.filter(item => item.id != action.payload);
        }
        default:
            return state;
    }
}
