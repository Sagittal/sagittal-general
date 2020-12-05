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
import {computeIrrationalDecimalFromScamon, computeIrrationalScamonFromDecimal, HALF_SCALER} from "../../irrational"
import {computeQuotientProduct, halveQuotient} from "../quotient"
import {Scamon} from "./types"

const addScamons = (augendScamon: Scamon, addendScamon: Scamon): Scamon<{direction: undefined, rational: false}> =>
    computeIrrationalScamonFromDecimal(
        multiply(computeIrrationalDecimalFromScamon(augendScamon), computeIrrationalDecimalFromScamon(addendScamon)),
    ) as Scamon<{direction: undefined, rational: false}>

const subtractScamons = (
    minuendScamon: Scamon,
    subtrahendScamon: Scamon,
): Scamon<{direction: undefined, rational: false}> =>
    computeIrrationalScamonFromDecimal(
        divide(computeIrrationalDecimalFromScamon(minuendScamon), computeIrrationalDecimalFromScamon(subtrahendScamon)),
    ) as Scamon<{direction: undefined, rational: false}>

const halveScamon = <T extends NumericProperties>(scamon: Scamon<T>): Scamon<T & {rational: false}> =>
    ({...scamon, scaler: scamon.scaler ? halveQuotient(scamon.scaler) : HALF_SCALER} as Scamon<T & {rational: false}>)

const scaleScamon = <T extends NumericProperties>(
    scamon: Scamon<T>,
    scaler: Quotient | Degree,
): Scamon<T & {rational: false}> =>
    ({
        ...scamon,
        scaler: scamon.scaler ? computeQuotientProduct(scamon.scaler, scaler) : scaler,
    } as Scamon<T & {rational: false}>)

const maxScamon = (...scamons: Array<Scamon>): Max<Scamon> => {
    let maxDecimal = -Infinity as Decimal
    let maxIndex = undefined

    scamons.map(computeIrrationalDecimalFromScamon).forEach((decimal: Decimal, index: number): void => {
        if (decimal > maxDecimal) {
            maxDecimal = decimal
            maxIndex = index
        }
    })

    return scamons[maxIndex as unknown as number] as Max<Scamon>
}

const multiplyScamon = <T extends NumericProperties>(
    scamon: Scamon<T>,
    multiplier: Decimal<{integer: true}> & Multiplier,
): Scamon<T> => {
    return {
        ...scamon,
        monzo: scamon.monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
            return multiply(primeExponent, multiplier as Decimal<{integer: true}> & Multiplier<Exponent<Prime>>)
        }),
    } as Scamon<T>
}

const minScamon = (...scamons: Array<Scamon>): Min<Scamon> => {
    let minDecimal = Infinity as Decimal
    let minIndex = undefined

    scamons.map(computeIrrationalDecimalFromScamon).forEach((decimal: Decimal, index: number): void => {
        if (decimal < minDecimal) {
            minDecimal = decimal
            minIndex = index
        }
    })

    return scamons[minIndex as unknown as number] as Min<Scamon>
}

export {
    addScamons,
    halveScamon,
    maxScamon,
    minScamon,
    subtractScamons,
    multiplyScamon,
    scaleScamon,
}
