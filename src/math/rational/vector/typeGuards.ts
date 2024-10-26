import { Count } from "../../../types"
import { Vector, NumericProperties } from "../../numeric"
import { isDecimalInteger } from "../decimal"
import { Prime } from "../types"

const isVectorRational = <T extends NumericProperties>(
    candidateRationalVector: Vector<T>,
): candidateRationalVector is Vector<T & { rational: true }> =>
    candidateRationalVector.every((primeCount: Count<Prime>): boolean =>
        isDecimalInteger(primeCount),
    )

const isVectorInteger = <T extends NumericProperties>(
    candidateIntegerVector: Vector<T>,
): candidateIntegerVector is Vector<T & { integer: true }> =>
    isVectorRational(candidateIntegerVector) &&
    candidateIntegerVector.every((primeCount: Count<Prime>): boolean => primeCount >= 0)

export { isVectorInteger, isVectorRational }
