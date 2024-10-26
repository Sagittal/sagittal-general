import { Prime } from "../../rational"
import { negative } from "../../typedOperations"
import { computeDecimalFromVector } from "../decimal"
import { Vector } from "../vector"
import { NumericProperties } from "../types"
import { Quotient } from "./types"
import { Count } from "../../../types"

const computeQuotientFromVector = <T extends NumericProperties>(vector: Vector<T>): Quotient<T> => {
    const numeratorVector = vector.map((primeCount: Count<Prime>): Count<Prime> => {
        return primeCount > 0 ? primeCount : (0 as Count<Prime>)
    })
    const denominatorVector = vector.map((primeCount: Count<Prime>): Count<Prime> => {
        return primeCount < 0 ? negative(primeCount) : (0 as Count<Prime>)
    })

    const numerator = computeDecimalFromVector(numeratorVector as Vector<T>)
    const denominator = computeDecimalFromVector(denominatorVector as Vector<T>)

    return [numerator, denominator] as unknown as Quotient<T>
}

export { computeQuotientFromVector }
