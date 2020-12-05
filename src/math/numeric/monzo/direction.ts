import {MULTIPLICATIVE_IDENTITY} from "../../constants"
import {Prime} from "../../rational"
import {Exponent} from "../../types"
import {computeDecimalFromMonzo} from "../decimal"
import {Direction, NumericProperties} from "../types"
import {Monzo} from "./types"

const isMonzoSub = <T extends NumericProperties>(
    candidateSubMonzo: Monzo<Omit<T, "direction">>,
): candidateSubMonzo is Monzo<Omit<T, "direction"> & {direction: Direction.SUB}> => {
    if (
        candidateSubMonzo.length &&
        candidateSubMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent >= 0)
    ) {
        return false
    }
    if (
        candidateSubMonzo.length &&
        candidateSubMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent <= 0)
    ) {
        return true
    }

    return computeDecimalFromMonzo(candidateSubMonzo) < MULTIPLICATIVE_IDENTITY
}

const isMonzoSuper = <T extends NumericProperties>(
    candidateSuperMonzo: Monzo<Omit<T, "direction">>,
): candidateSuperMonzo is Monzo<Omit<T, "direction"> & {direction: Direction.SUPER}> =>
    !(isMonzoUnison(candidateSuperMonzo) || isMonzoSub(candidateSuperMonzo))

const isMonzoUnison = <T extends NumericProperties>(
    candidateUnisonMonzo: Monzo<Omit<T, "direction">>,
): candidateUnisonMonzo is Monzo<Omit<T, "direction"> & {direction: Direction.UNISON}> =>
    candidateUnisonMonzo.every((primeExponent: Exponent<Prime>): boolean => primeExponent === 0)

const computeSuperMonzo: {
    <T extends NumericProperties>(
        monzo: Monzo<T & {direction: Direction.UNISON}>,
    ): Monzo<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        monzo: Monzo<T>,
    ): Monzo<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
} = <T extends NumericProperties>(
    monzo: Monzo<T>,
): Monzo<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.UNISON}> =>
    isMonzoSuper(monzo) ?
        monzo as Monzo<Omit<T, "direction">> :
        invertMonzo(monzo)

const computeSubMonzo: {
    <T extends NumericProperties>(
        monzo: Monzo<T & {direction: Direction.UNISON}>,
    ): Monzo<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        monzo: Monzo<T>,
    ): Monzo<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
} = <T extends NumericProperties>(
    monzo: Monzo<T>,
): Monzo<Omit<T, "direction"> & {direction: Direction.SUB & Direction.UNISON}> =>
    isMonzoSub(monzo) ?
        monzo as Monzo<Omit<T, "direction">> :
        invertMonzo(monzo)

const invertMonzo: {
    <T extends NumericProperties>(
        monzo: Monzo<T & {direction: Direction.SUPER}>,
    ): Monzo<Omit<T, "direction"> & {direction: Direction.SUB, integer: false}>,
    <T extends NumericProperties>(
        monzo: Monzo<T & {direction: Direction.SUB}>,
    ): Monzo<Omit<T, "direction"> & {direction: Direction.SUPER, integer: false}>,
    <T extends NumericProperties>(
        monzo: Monzo<T & {direction: Direction.UNISON}>,
    ): Monzo<Omit<T, "direction"> & {direction: Direction.UNISON}>,
    <T extends NumericProperties>(
        monzo: Monzo<T>,
    ): Monzo<Omit<T, "direction"> & {integer: false}>,
} = <T extends NumericProperties>(
    monzo: Monzo<T>,
): Monzo<Omit<T, "direction"> & {direction: Direction.SUPER & Direction.SUB & Direction.UNISON}> =>
    monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return primeExponent === 0 ?
            0 as Exponent<Prime> :
            -primeExponent as Exponent<Prime>
    }) as Monzo<Omit<T, "direction">>

export {
    isMonzoSub,
    isMonzoSuper,
    isMonzoUnison,
    computeSuperMonzo,
    computeSubMonzo,
    invertMonzo,
}
