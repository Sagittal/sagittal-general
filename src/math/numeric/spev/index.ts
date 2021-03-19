export {Spev} from "./types"
export {computeSpevFromDecimal} from "./fromDecimal"
export {computeSpevFromQuotient} from "./fromQuotient"
export {computeSpevFromPev} from "./fromPev"
export {isSpevSub, isSpevSuper, isSpevUnison, computeSuperSpev, invertSpev} from "./direction"
export {halveSpev, addSpevs, multiplySpev, scaleSpev, maxSpev} from "./typedOperations"
export {
    areSpevsEqual,
    isSpevGreater,
    isSpevLesser,
    isSpevLesserOrEqual,
    isSpevGreaterOrEqual,
} from "./comparison"
