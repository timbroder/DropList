import {ADD_LIST, GET_LISTS, ADD_TODO, GET_TODOS} from "./actionTypes";

export function getLists() {
    return { type: GET_LISTS }
}

export function addList(name: string) {
    return {
        type: ADD_LIST,
        payload: name
    }
}

export function addTodo(name: string, listId: number) {
    return {
        type: ADD_TODO,
        payload: {
            name,
            listId
        }
    }
}