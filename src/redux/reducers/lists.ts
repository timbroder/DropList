import {ADD_LIST, DELETE_LIST, GET_LISTS} from "../actionTypes";
import {maxProp} from "../../utils/number";
import {itemSort} from "../../utils/array";

const initialLists = [
        {
            id: 1,
            name: 'Tim Packing - FPO',
            sort: 1
        },
        {
            id: 2,
            name: 'Laura  Packing - FPO',
            sort: 2
        }
    ];

export default function(state = initialLists, action) {
    switch (action.type) {
        case GET_LISTS: {
            return state;
        }
        case ADD_LIST: {
            return [
                ...state,
                {
                    id: maxProp(state, 'id') + 1,
                    name: action.payload,
                    sort: maxProp(state, 'sort') + 1,
                }
            ].sort(itemSort);
        }
        case DELETE_LIST: {
            return state.filter(list => list.id != action.payload);
        }
        default:
            return state;
    }
}
