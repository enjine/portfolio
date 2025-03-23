export function randomKey<T extends object>(items: T) {
    const keys = Object.keys(items)
    return keys[Math.floor(Math.random() * keys.length)] as keyof T
}

export function randomValue<T extends Record<string, any>>(items: T[]) {
    return items[Math.floor(Math.random() * items.length)] as T
}
