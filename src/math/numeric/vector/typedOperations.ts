import { computeRange, computeTrimmedArray, shallowClone } from "../../../code"
import { add, count, invertVector, max, multiply, NumericProperties, Vector } from "../../../math"
import { Multiplier } from "../../types"
import { PrimeCount } from "./types"

const sumVectors = <T extends NumericProperties>(...vectors: Array<Vector<T>>): Vector<T> => {
    const maxVectorLength = max(...vectors.map(count))

    const summedVectors: Vector<T> = computeRange(maxVectorLength).map((index: number): PrimeCount<T> => {
        return vectors.reduce((totalPrimeCount: PrimeCount<T>, vector: Vector<T>): PrimeCount<T> => {
            const primeCount: PrimeCount<T> = vector[index] || (0 as PrimeCount<T>)

            return add(totalPrimeCount, primeCount)
        }, 0 as PrimeCount<T>) as PrimeCount<T>
    }) as Vector<T>

    return computeTrimmedArray(summedVectors) as Vector<T>
}

const addVectors = <T extends NumericProperties>(
    augendVector: Vector<T>,
    addendVector: Vector<T>,
): Vector<T> => {
    const vectorToMap = shallowClone(augendVector)
    while (vectorToMap.length < addendVector.length) {
        vectorToMap.push(0 as PrimeCount<T>)
    }

    return computeTrimmedArray(
        vectorToMap.map((primeCount: PrimeCount<T>, index: number): PrimeCount<T> => {
            return addendVector[index] ? add(primeCount, addendVector[index]) : primeCount
        }),
    ) as Vector<T>
}

const subtractVectors = <T extends NumericProperties>(
    minuendVector: Vector<T>,
    subtrahendVector: Vector<T>,
): Vector<T> => addVectors(minuendVector, invertVector(subtrahendVector) as Vector<T>)

const multiplyVector = <T extends NumericProperties>(vector: Vector<T>, multiplier: Multiplier): Vector<T> =>
    vector.map((primeCount: PrimeCount<T>): PrimeCount<T> => {
        return multiply(primeCount, multiplier as Multiplier<PrimeCount<T>>)
    }) as Vector<T>

export { sumVectors, addVectors, subtractVectors, multiplyVector }
