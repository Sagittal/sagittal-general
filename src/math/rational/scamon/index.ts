export {isScamonRational} from "./typeGuards"
export {isRationalScamonRough} from "./roughness"
export {computeRationalScamonSmoothness, isRationalScamonSmooth} from "./smoothness"
export {computeRationalScamonCopfr} from "./copfr"
export {computeRationalScamonSopfr} from "./sopfr"
export {
    areRationalScamonsEqual,
    isRationalScamonGreater,
    isRationalScamonGreaterOrEqual,
    isRationalScamonLesser,
    isRationalScamonLesserOrEqual,
} from "./comparison"
export {isRationalScamonSub, isRationalScamonSuper, isRationalScamonUnison} from "./direction"
export {
    computeRationalScamonFromRationalDecimal,
    computeRationalScamonFromRationalMonzo,
    computeRationalScamonFromRationalQuotient,
} from "./from"
export {
    addRationalScamons, subtractRationalScamons, computeRationalScamonGeometricMean, sumRationalScamons,
} from "./typedOperations"
