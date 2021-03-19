import {
    Decimal,
    divide,
    Exponent,
    Max,
    Min,
    Multiplier,
    multiply,
    NumericProperties,
    Prime,
    Quotient,
} from "../../../math"
import {Degree} from "../../../types"
import {computeIrrationalDecimalFromSpev, computeIrrationalSpevFromDecimal, HALF_SCALER} from "../../irrational"
import {computeQuotientProduct, halveQuotient} from "../quotient"
import {Spev} from "./types"

const addSpevs = (augendSpev: Spev, addendSpev: Spev): Spev<{direction: undefined, rational: false}> =>
    computeIrrationalSpevFromDecimal(
        multiply(computeIrrationalDecimalFromSpev(augendSpev), computeIrrationalDecimalFromSpev(addendSpev)),
    ) as Spev<{direction: undefined, rational: false}>

const subtractSpevs = (
    minuendSpev: Spev,
    subtrahendSpev: Spev,
): Spev<{direction: undefined, rational: false}> =>
    computeIrrationalSpevFromDecimal(
        divide(computeIrrationalDecimalFromSpev(minuendSpev), computeIrrationalDecimalFromSpev(subtrahendSpev)),
    ) as Spev<{direction: undefined, rational: false}>

const halveSpev = <T extends NumericProperties>(spev: Spev<T>): Spev<T & {rational: false}> =>
    ({...spev, scaler: spev.scaler ? halveQuotient(spev.scaler) : HALF_SCALER} as Spev<T & {rational: false}>)

const scaleSpev = <T extends NumericProperties>(
    spev: Spev<T>,
    scaler: Quotient | Degree,
): Spev<T & {rational: false}> =>
    ({
        ...spev,
        scaler: spev.scaler ? computeQuotientProduct(spev.scaler, scaler) : scaler,
    } as Spev<T & {rational: false}>)

const maxSpev = (...spevs: Array<Spev>): Max<Spev> => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    spevs.map(computeIrrationalDecimalFromSpev).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return spevs[maxIndex as unknown as number] as Max<Spev>
}

const multiplySpev = <T extends NumericProperties>(
    spev: Spev<T>,
    multiplier: Decimal<{integer: true}> & Multiplier,
): Spev<T> => {
    return {
        ...spev,
        pev: spev.pev.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
            return multiply(primeExponent, multiplier as Decimal<{integer: true}> & Multiplier<Exponent<Prime>>)
        }),
    } as Spev<T>
}

const minSpev = (...spevs: Array<Spev>): Min<Spev> => {
    let minDecimal = Infinity as Decimal
    let minIndex = undefined

    spevs.map(computeIrrationalDecimalFromSpev).forEach((decimal: Decimal, index: number): void => {
        if (decimal < minDecimal) {
            minDecimal = decimal
            minIndex = index
        }
    })

    return spevs[minIndex as unknown as number] as Min<Spev>
}

export {
    addSpevs,
    halveSpev,
    maxSpev,
    minSpev,
    subtractSpevs,
    multiplySpev,
    scaleSpev,
}
