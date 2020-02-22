interface item {
    id: number,
    name: string,
    sort: number,
}

const itemSort = (a: item, b: item) => {
    return a.sort > b.sort;
}

const todoSort = (a: todo, b: todo) => {
    if (a.complete == b.complete) {
        return itemSort(a, b);
    }

    return a.complete < b.complete ? 1 : -1;
}

export { itemSort, todoSort };