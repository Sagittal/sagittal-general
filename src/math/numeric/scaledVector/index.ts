export { ScaledVector } from "./types"
export { computeScaledVectorFromDecimal } from "./fromDecimal"
export { computeScaledVectorFromQuotient } from "./fromQuotient"
export { computeScaledVectorFromVector } from "./fromVector"
export {
    isScaledVectorSub,
    isScaledVectorSuper,
    isScaledVectorUnison,
    computeSuperScaledVector,
    computeSubScaledVector,
    invertScaledVector,
} from "./direction"
export {
    halveScaledVector,
    addScaledVectors,
    multiplyScaledVector,
    scaleScaledVector,
    maxScaledVector,
} from "./typedOperations"
export {
    areScaledVectorsEqual,
    isScaledVectorGreater,
    isScaledVectorLesser,
    isScaledVectorLesserOrEqual,
    isScaledVectorGreaterOrEqual,
} from "./comparison"
