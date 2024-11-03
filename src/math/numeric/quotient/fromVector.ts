import { negative } from "../../typedOperations"
import { computeDecimalFromVector } from "../decimal"
import { NumericProperties } from "../types"
import { Vector } from "../vector"
import { PrimeCount } from "../vector/types"
import { Quotient } from "./types"

const computeQuotientFromVector = <T extends NumericProperties>(vector: Vector<T>): Quotient<T> => {
    const numeratorVector = vector.map((primeCount: PrimeCount<T>): PrimeCount<T> => {
        return primeCount > 0 ? primeCount : (0 as PrimeCount<T>)
    })
    const denominatorVector = vector.map((primeCount: PrimeCount<T>): PrimeCount<T> => {
        return primeCount < 0 ? negative(primeCount) : (0 as PrimeCount<T>)
    })

    const numerator = computeDecimalFromVector(numeratorVector as Vector<T>)
    const denominator = computeDecimalFromVector(denominatorVector as Vector<T>)

    return [numerator, denominator] as unknown as Quotient<T>
}

export { computeQuotientFromVector }
