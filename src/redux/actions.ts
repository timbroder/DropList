import {ADD_LIST, GET_LISTS, DELETE_LIST, ADD_TODO, DELETE_TODOS, DELETE_TODO} from "./actionTypes";

export function getLists() {
    return { type: GET_LISTS }
}

export function addList(name: string) {
    return {
        type: ADD_LIST,
        payload: name
    }
}

export function deleteList(id: number) {
    return {
        type: DELETE_LIST,
        payload: id
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

export function deleteTodos(listId: number) {
    return {
        type: DELETE_TODOS,
        payload: listId
    }
}

export function deleteTodo(todoId: number) {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}