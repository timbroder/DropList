import {ADD_LIST, GET_LISTS} from "../actionTypes";
import {maxPriority} from "../../utils/number";

const initialLists = [
        {
            name: 'Tim Packing - FPO',
            priority: 1
        },
        {
            name: 'Laura  Packing - FPO',
            priority: 2
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
                    name: action.payload,
                    priority: maxPriority(state) + 1,
                }
            ]
        }
        default:
            return state;
    }
}
