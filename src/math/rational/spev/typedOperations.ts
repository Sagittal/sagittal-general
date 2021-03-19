import {addPevs, NumericProperties, Quotient, Spev, subtractPevs, sumPevs} from "../../numeric"
import {Mean, MeanType} from "../../types"
import {computeRationalPevFromRationalSpev} from "../pev"

const addRationalSpevs = <T extends NumericProperties>(
    augendSpev: Spev<T & {rational: true}>,
    addendSpev: Spev<T & {rational: true}>,
): Spev<T & {direction: undefined, integer: false, rational: true}> =>
    ({
        pev: addPevs(augendSpev.pev, addendSpev.pev),
    }) as Spev<T & {direction: undefined, integer: false, rational: true}>

const subtractRationalSpevs = <T extends NumericProperties>(
    minuendSpev: Spev<T & {rational: true}>,
    subtrahendSpev: Spev<T & {rational: true}>,
): Spev<T & {direction: undefined, integer: false, rational: true}> =>
    ({
        pev: subtractPevs(minuendSpev.pev, subtrahendSpev.pev),
    }) as Spev<T & {direction: undefined, integer: false, rational: true}>

const computeRationalSpevGeometricMean = (
    ...rationalSpevs: Array<Spev<{rational: true}>>
): Mean<{of: Spev<{rational: false}>, meanType: MeanType.GEOMETRIC}> => {
    return {
        pev: sumPevs(...rationalSpevs.map(computeRationalPevFromRationalSpev)),
        scaler: [1, rationalSpevs.length] as Quotient,
    } as Mean<{of: Spev<{rational: false}>, meanType: MeanType.GEOMETRIC}>
}

const sumRationalSpevs = <T extends NumericProperties>(
    ...rationalSpevs: Array<Spev<T & {rational: true}>>
): Spev<T & {direction: undefined, integer: false, rational: true}> =>
    ({
        pev: sumPevs(...rationalSpevs.map(computeRationalPevFromRationalSpev)),
    }) as Spev<T & {direction: undefined, integer: false, rational: true}>

export {
    subtractRationalSpevs,
    addRationalSpevs,
    computeRationalSpevGeometricMean,
    sumRationalSpevs,
}
