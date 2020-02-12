interface item {
    name: string,
    priority: number,
}

const maxPriority = (items: Array<item>) => {
    return items.reduce((prev: item, current: item) => (prev.priority > current.priority) ? prev : current).priority
}

export { maxPriority };