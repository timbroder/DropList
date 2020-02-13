interface item {
    id: number,
    name: string,
    priority: number,
}

const maxObject =  (items: Array<item>, prop: string) => {
    return items.length > 0
        ? items.reduce((prev: item, current: item) => (prev[prop] > current[prop]) ? prev : current)
        : null;
}

const maxProp = (items: Array<item>, prop: string) => {
    const o = maxObject(items, prop);

    return o ? o[prop] : 0;
}

export { maxObject, maxProp };