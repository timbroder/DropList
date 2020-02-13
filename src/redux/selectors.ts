export function getList(state, listId) {
    return state.lists.find(item => item.id == listId);
}

export function getTodos(state, listId) {
    return state.todos.filter(item => item.listId == listId);
}