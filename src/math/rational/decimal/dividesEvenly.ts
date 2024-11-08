import { Decimal, Integer, mod } from "../../numeric"

const dividesEvenly = (number: Decimal<Integer>, modulus: Decimal<Integer>): boolean =>
    mod(number, modulus) === 0

const isEven = (number: Decimal<Integer>): boolean => dividesEvenly(number, 2 as Decimal<Integer>)

const isOdd = (number: Decimal<Integer>): boolean => !isEven(number)

export { dividesEvenly, isEven, isOdd }
