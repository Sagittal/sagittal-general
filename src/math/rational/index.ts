export {
    FIVE_PRIME_INDEX,
    FIVE_ROUGHNESS,
    ONE,
    THREE_PRIME_INDEX,
    THREE_ROUGHNESS,
    THREE_SMOOTHNESS,
    TWO_PRIME_INDEX,
    FIVE_SMOOTHNESS,
} from "./constants"
export { computeRoughnessIndex } from "./roughness"
export { computeSmoothnessIndex } from "./smoothness"
export { computePrimes, primes } from "./primes"
export { computeLesserPrimeCount } from "./lesserPrimeCount"
export { computeGreatestCommonDivisor } from "./common"
export { Copfr, Prime, Roughness, Sopfr, Smoothness, Primes } from "./types"
export {
    isDecimalInteger,
    isIntegerDecimalRough,
    computeIntegerDecimalSmoothness,
    computeRationalDecimalSmoothness,
    ceil,
    floor,
    integerDivide,
    isDecimalRational,
    computeRationalDecimalCopfr,
    computeRationalDecimalGpf,
    computeRationalDecimalCopf,
} from "./decimal"
export {
    isRationalQuotientRough,
    computeRoughRationalQuotient,
    isRationalQuotientSmooth,
    computeRationalQuotientFromRationalDecimal,
    isQuotientRational,
    computeLowestTermsRationalQuotient,
    areRationalQuotientsEqual,
    computeRationalQuotientFromRationalScaledVector,
    isLowestTerms,
    computeRationalQuotientSmoothness,
} from "./quotient"
export {
    computeRationalVectorFromRationalQuotient,
    computeRoughRationalVector,
    isRationalVectorRough,
    doForEachRationalVector,
    computeRationalVectorFromRationalDecimal,
    computeRationalVectorCopfr,
    computeRationalVectorSmoothness,
    computeRationalVectorSopfr,
    isVectorRational,
    isRationalVectorSmooth,
    computeRationalVectorFromRationalScaledVector,
} from "./vector"
export {
    computeRationalScaledVectorFromRationalDecimal,
    computeRationalScaledVectorFromRationalVector,
    computeRationalScaledVectorFromRationalQuotient,
    isScaledVectorRational,
    computeRationalScaledVectorCopfr,
    computeRationalScaledVectorSopfr,
    areRationalScaledVectorsEqual,
    isRationalScaledVectorSub,
    isRationalScaledVectorUnison,
    addRationalScaledVectors,
    computeRationalScaledVectorGeometricMean,
    isRationalScaledVectorRough,
    computeRationalScaledVectorSmoothness,
    isRationalScaledVectorSmooth,
    subtractRationalScaledVectors,
    sumRationalScaledVectors,
} from "./scaledVector"
