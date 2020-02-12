import {ADD_LIST, GET_LISTS} from "./actionTypes";

export function getLists() {
    return { type: GET_LISTS }
}

export function addList(name: string) {
    return {
        type: ADD_LIST,
        payload: name
    }
}