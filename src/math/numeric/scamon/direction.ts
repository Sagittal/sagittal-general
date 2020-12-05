import {deepClone} from "../../../code"
import {
    Direction,
    invertMonzo,
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    Monzo,
    NumericProperties,
} from "../../../math"
import {computeIrrationalDecimalFromScamon} from "../../irrational"
import {Scamon} from "./types"

const isScamonSuper = <T extends NumericProperties>(
    candidateSuperScamon: Scamon<T>,
): candidateSuperScamon is (Scamon<T & {direction: Direction.SUPER}>) =>
    isDecimalSuper(computeIrrationalDecimalFromScamon(candidateSuperScamon))

const isScamonSub = <T extends NumericProperties>(
    candidateSubScamon: Scamon<T>,
): candidateSubScamon is Scamon<T & {direction: Direction.SUB}> =>
    isDecimalSub(computeIrrationalDecimalFromScamon(candidateSubScamon))

const isScamonUnison = <T extends NumericProperties>(
    candidateUnisonScamon: Scamon<T>,
): candidateUnisonScamon is Scamon<T & {direction: Direction.UNISON}> =>
    isDecimalUnison(computeIrrationalDecimalFromScamon(candidateUnisonScamon))

const computeSuperScamon: {
    <T extends NumericProperties>(
        scamon: Scamon<T & {direction: Direction.UNISON}>,
    ): Scamon<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        scamon: Scamon<T>,
    ): Scamon<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
} = <T extends NumericProperties>(
    scamon: Scamon<T>,
): Scamon<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.UNISON}> =>
    isScamonSuper(scamon) ?
        scamon as Scamon<Omit<T, "direction">> :
        invertScamon(scamon) as Scamon<Omit<T, "direction">>

const computeSubScamon: {
    <T extends NumericProperties>(
        scamon: Scamon<T & {direction: Direction.UNISON}>,
    ): Scamon<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        scamon: Scamon<T>,
    ): Scamon<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
} = <T extends NumericProperties>(
    scamon: Scamon<T>,
): Scamon<Omit<T, "direction"> & {direction: Direction.SUB & Direction.UNISON}> =>
    isScamonSub(scamon) ?
        scamon as Scamon<Omit<T, "direction">> :
        invertScamon(scamon) as Scamon<Omit<T, "direction">>

const invertScamon: {
    <T extends NumericProperties>(
        scamon: Scamon<T & {direction: Direction.SUPER}>,
    ): Scamon<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
    <T extends NumericProperties>(
        scamon: Scamon<T & {direction: Direction.SUB}>,
    ): Scamon<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
    <T extends NumericProperties>(
        scamon: Scamon<T & {direction: Direction.UNISON}>,
    ): Scamon<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        scamon: Scamon<T>,
    ): Scamon<Omit<T, "direction"> & {integer: false}>,
} = <T extends NumericProperties>(
    scamon: Scamon<T>,
): Scamon<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.SUB & Direction.UNISON}> => {
    const invertedScamon = deepClone(scamon)

    invertedScamon.monzo = invertMonzo(invertedScamon.monzo) as Monzo<T & {rational: true}>

    return invertedScamon as Scamon<Omit<T, "direction">>
}

export {
    isScamonSub,
    isScamonSuper,
    isScamonUnison,
    computeSuperScamon,
    computeSubScamon,
    invertScamon,
}
