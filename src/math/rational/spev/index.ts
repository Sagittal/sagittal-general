export {isSpevRational} from "./typeGuards"
export {isRationalSpevRough} from "./roughness"
export {computeRationalSpevSmoothness, isRationalSpevSmooth} from "./smoothness"
export {computeRationalSpevCopfr} from "./copfr"
export {computeRationalSpevSopfr} from "./sopfr"
export {
    areRationalSpevsEqual,
    isRationalSpevGreater,
    isRationalSpevGreaterOrEqual,
    isRationalSpevLesser,
    isRationalSpevLesserOrEqual,
} from "./comparison"
export {isRationalSpevSub, isRationalSpevSuper, isRationalSpevUnison} from "./direction"
export {
    computeRationalSpevFromRationalDecimal,
    computeRationalSpevFromRationalPev,
    computeRationalSpevFromRationalQuotient,
} from "./from"
export {
    addRationalSpevs, subtractRationalSpevs, computeRationalSpevGeometricMean, sumRationalSpevs,
} from "./typedOperations"
