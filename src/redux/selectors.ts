import {todoSort} from "../utils/array";

export function getList(state, listId) {
    return state.lists.find(item => item.id == listId);
}

export function getTodos(state, listId) {
    return state.todos
        .filter(item => item.listId == listId)
        .sort(todoSort);
}

export function getCompleteTodos(state, listId) {
    return state.todos
        .filter(item => item.listId == listId && item.completed)
        .sort(todoSort);
}

export function getIncompleteTodos(state, listId) {
    return state.todos
        .filter(item => item.listId == listId && !item.completed)
        .sort(todoSort);
}