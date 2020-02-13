import {ADD_TODO} from "../actionTypes";
import {maxProp} from "../../utils/number";

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
            ]
        }
        default:
            return state;
    }
}
