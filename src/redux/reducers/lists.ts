import {ADD_LIST, GET_LISTS} from "../actionTypes";
import {maxProp} from "../../utils/number";

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
            ]
        }
        default:
            return state;
    }
}
