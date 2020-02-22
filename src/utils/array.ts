interface item {
    id: number,
    name: string,
    sort: number,
}

const itemSort = (a: item, b: item) => {
    return a.sort > b.sort;
}

export { itemSort };