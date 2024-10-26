export {isScaledVectorRational} from "./typeGuards"
export {isRationalScaledVectorRough} from "./roughness"
export {computeRationalScaledVectorSmoothness, isRationalScaledVectorSmooth} from "./smoothness"
export {computeRationalScaledVectorCopfr} from "./copfr"
export {computeRationalScaledVectorSopfr} from "./sopfr"
export {
    areRationalScaledVectorsEqual,
    isRationalScaledVectorGreater,
    isRationalScaledVectorGreaterOrEqual,
    isRationalScaledVectorLesser,
    isRationalScaledVectorLesserOrEqual,
} from "./comparison"
export {isRationalScaledVectorSub, isRationalScaledVectorSuper, isRationalScaledVectorUnison} from "./direction"
export {
    computeRationalScaledVectorFromRationalDecimal,
    computeRationalScaledVectorFromRationalVector,
    computeRationalScaledVectorFromRationalQuotient,
} from "./from"
export {
    addRationalScaledVectors, subtractRationalScaledVectors, computeRationalScaledVectorGeometricMean, sumRationalScaledVectors,
} from "./typedOperations"
