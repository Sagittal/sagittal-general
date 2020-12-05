const increment = <T extends number>(number: T): T =>
    number + 1 as T

const decrement = <T extends number>(number: T): T =>
    number - 1 as T

export {
    increment,
    decrement,
}
