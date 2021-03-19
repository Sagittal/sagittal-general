import {deepClone} from "../../../code"
import {
    Direction,
    invertPev,
    isDecimalSub,
    isDecimalSuper,
    isDecimalUnison,
    Pev,
    NumericProperties,
} from "../../../math"
import {computeIrrationalDecimalFromSpev} from "../../irrational"
import {Spev} from "./types"

const isSpevSuper = <T extends NumericProperties>(
    candidateSuperSpev: Spev<T>,
): candidateSuperSpev is (Spev<T & {direction: Direction.SUPER}>) =>
    isDecimalSuper(computeIrrationalDecimalFromSpev(candidateSuperSpev))

const isSpevSub = <T extends NumericProperties>(
    candidateSubSpev: Spev<T>,
): candidateSubSpev is Spev<T & {direction: Direction.SUB}> =>
    isDecimalSub(computeIrrationalDecimalFromSpev(candidateSubSpev))

const isSpevUnison = <T extends NumericProperties>(
    candidateUnisonSpev: Spev<T>,
): candidateUnisonSpev is Spev<T & {direction: Direction.UNISON}> =>
    isDecimalUnison(computeIrrationalDecimalFromSpev(candidateUnisonSpev))

const computeSuperSpev: {
    <T extends NumericProperties>(
        spev: Spev<T & {direction: Direction.UNISON}>,
    ): Spev<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        spev: Spev<T>,
    ): Spev<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
} = <T extends NumericProperties>(
    spev: Spev<T>,
): Spev<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.UNISON}> =>
    isSpevSuper(spev) ?
        spev as Spev<Omit<T, "direction">> :
        invertSpev(spev) as Spev<Omit<T, "direction">>

const computeSubSpev: {
    <T extends NumericProperties>(
        spev: Spev<T & {direction: Direction.UNISON}>,
    ): Spev<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        spev: Spev<T>,
    ): Spev<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
} = <T extends NumericProperties>(
    spev: Spev<T>,
): Spev<Omit<T, "direction"> & {direction: Direction.SUB & Direction.UNISON}> =>
    isSpevSub(spev) ?
        spev as Spev<Omit<T, "direction">> :
        invertSpev(spev) as Spev<Omit<T, "direction">>

const invertSpev: {
    <T extends NumericProperties>(
        spev: Spev<T & {direction: Direction.SUPER}>,
    ): Spev<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
    <T extends NumericProperties>(
        spev: Spev<T & {direction: Direction.SUB}>,
    ): Spev<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
    <T extends NumericProperties>(
        spev: Spev<T & {direction: Direction.UNISON}>,
    ): Spev<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        spev: Spev<T>,
    ): Spev<Omit<T, "direction"> & {integer: false}>,
} = <T extends NumericProperties>(
    spev: Spev<T>,
): Spev<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.SUB & Direction.UNISON}> => {
    const invertedSpev = deepClone(spev)

    invertedSpev.pev = invertPev(invertedSpev.pev) as Pev<T & {rational: true}>

    return invertedSpev as Spev<Omit<T, "direction">>
}

export {
    isSpevSub,
    isSpevSuper,
    isSpevUnison,
    computeSuperSpev,
    computeSubSpev,
    invertSpev,
}
