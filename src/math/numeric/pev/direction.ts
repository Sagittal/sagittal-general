import {MULTIPLICATIVE_IDENTITY} from "../../constants"
import {Prime} from "../../rational"
import {Exponent} from "../../types"
import {computeDecimalFromPev} from "../decimal"
import {Direction, NumericProperties} from "../types"
import {Pev} from "./types"

const isPevSub = <T extends NumericProperties>(
    candidateSubPev: Pev<Omit<T, "direction">>,
): candidateSubPev is Pev<Omit<T, "direction"> & {direction: Direction.SUB}> => {
    if (
        candidateSubPev.length &&
        candidateSubPev.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)
    ) {
        return false
    }
    if (
        candidateSubPev.length &&
        candidateSubPev.every((primeExponent: Exponent<Prime>): boolean => primeExponent <= 0)
    ) {
        return true
    }

    return computeDecimalFromPev(candidateSubPev) < MULTIPLICATIVE_IDENTITY
}

const isPevSuper = <T extends NumericProperties>(
    candidateSuperPev: Pev<Omit<T, "direction">>,
): candidateSuperPev is Pev<Omit<T, "direction"> & {direction: Direction.SUPER}> =>
    !(isPevUnison(candidateSuperPev) || isPevSub(candidateSuperPev))

const isPevUnison = <T extends NumericProperties>(
    candidateUnisonPev: Pev<Omit<T, "direction">>,
): candidateUnisonPev is Pev<Omit<T, "direction"> & {direction: Direction.UNISON}> =>
    candidateUnisonPev.every((primeExponent: Exponent<Prime>): boolean => primeExponent === 0)

const computeSuperPev: {
    <T extends NumericProperties>(
        pev: Pev<T & {direction: Direction.UNISON}>,
    ): Pev<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        pev: Pev<T>,
    ): Pev<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
} = <T extends NumericProperties>(
    pev: Pev<T>,
): Pev<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.UNISON}> =>
    isPevSuper(pev) ?
        pev as Pev<Omit<T, "direction">> :
        invertPev(pev)

const computeSubPev: {
    <T extends NumericProperties>(
        pev: Pev<T & {direction: Direction.UNISON}>,
    ): Pev<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        pev: Pev<T>,
    ): Pev<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
} = <T extends NumericProperties>(
    pev: Pev<T>,
): Pev<Omit<T, "direction"> & {direction: Direction.SUB & Direction.UNISON}> =>
    isPevSub(pev) ?
        pev as Pev<Omit<T, "direction">> :
        invertPev(pev)

const invertPev: {
    <T extends NumericProperties>(
        pev: Pev<T & {direction: Direction.SUPER}>,
    ): Pev<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
    <T extends NumericProperties>(
        pev: Pev<T & {direction: Direction.SUB}>,
    ): Pev<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
    <T extends NumericProperties>(
        pev: Pev<T & {direction: Direction.UNISON}>,
    ): Pev<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        pev: Pev<T>,
    ): Pev<Omit<T, "direction"> & {integer: false}>,
} = <T extends NumericProperties>(
    pev: Pev<T>,
): Pev<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.SUB & Direction.UNISON}> =>
    pev.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent === 0 ?
            0 as Exponent<Prime> :
            -primeExponent as Exponent<Prime>
    }) as Pev<Omit<T, "direction">>

export {
    isPevSub,
    isPevSuper,
    isPevUnison,
    computeSuperPev,
    computeSubPev,
    invertPev,
}
