import { Vector, NumericProperties, PrimeCount, Integer } from "../../numeric"
import { Rational } from "../../numeric"
import { isDecimalInteger } from "../decimal"

const isVectorRational = <T extends NumericProperties>(
    candidateRationalVector: Vector<T>,
): candidateRationalVector is Vector<T & Rational> =>
    candidateRationalVector.every((primeCount: PrimeCount<T>): boolean => isDecimalInteger(primeCount))

const isVectorInteger = <T extends NumericProperties>(
    candidateIntegerVector: Vector<T>,
): candidateIntegerVector is Vector<T & Integer> =>
    isVectorRational(candidateIntegerVector) &&
    candidateIntegerVector.every((primeCount: PrimeCount<T>): boolean => primeCount >= 0)

export { isVectorInteger, isVectorRational }
