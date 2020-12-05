const dividesEvenly = (number: number, modulus: number): boolean =>
    number % modulus === 0

const isEven = (number: number): boolean =>
    dividesEvenly(number, 2)

const isOdd = (number: number): boolean =>
    !isEven(number)

export {
    dividesEvenly,
    isEven,
    isOdd,
}
