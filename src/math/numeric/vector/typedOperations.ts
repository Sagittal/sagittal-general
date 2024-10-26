import { computeRange, computeTrimmedArray, shallowClone } from "../../../code"
import {
    add,
    count,
    Decimal,
    invertVector,
    max,
    multiply,
    NumericProperties,
    Vector,
    Prime,
} from "../../../math"
import { Count } from "../../../types"
import { Exponent, Multiplier } from "../../types"
import { NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms } from "../types"

const sumVectors = <T extends NumericProperties>(...vectors: Array<Vector<T>>): Vector<T> => {
    const maxVectorLength = max(...vectors.map(count))

    const summedVectors: Vector = computeRange(maxVectorLength).map(
        (index: number): Count<Prime> => {
            return vectors.reduce(
                (totalPrimeCount: Count<Prime>, vector: Vector): Count<Prime> => {
                    const primeCount: Count<Prime> = vector[index] || (0 as Count<Prime>)

                    return add(totalPrimeCount, primeCount)
                },
                0 as Count<Prime>,
            ) as Count<Prime>
        },
    ) as Vector

    return computeTrimmedArray(summedVectors) as Vector<T>
}

const addVectors = <T extends NumericProperties>(
    augendVector: Vector<T>,
    addendVector: Vector<T>,
): Vector<T> => {
    const vectorToMap = shallowClone(augendVector)
    while (vectorToMap.length < addendVector.length) {
        vectorToMap.push(
            0 as Count<Prime> &
                Exponent<Prime> &
                NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>,
        )
    }

    return computeTrimmedArray(
        vectorToMap.map((primeCount: Count<Prime>, index: number): Count<Prime> => {
            return addendVector[index] ? add(primeCount, addendVector[index]) : primeCount
        }),
    ) as Vector<T>
}

const subtractVectors = <T extends NumericProperties>(
    minuendVector: Vector<T>,
    subtrahendVector: Vector<T>,
): Vector<T> => addVectors(minuendVector, invertVector(subtrahendVector) as Vector<T>)

const multiplyVector = <T extends NumericProperties>(
    vector: Vector<T>,
    multiplier: Decimal<{ integer: true }> & Multiplier,
): Vector<T> =>
    vector.map((primeCount: Count<Prime>): Count<Prime> => {
        return multiply(
            primeCount,
            multiplier as Decimal<{ integer: true }> & Multiplier<Count<Prime>>,
        )
    }) as Vector<T>

export { sumVectors, addVectors, subtractVectors, multiplyVector }
