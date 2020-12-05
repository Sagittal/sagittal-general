import {addMonzos, NumericProperties, Quotient, Scamon, subtractMonzos, sumMonzos} from "../../numeric"
import {Mean, MeanType} from "../../types"
import {computeRationalMonzoFromRationalScamon} from "../monzo"

const addRationalScamons = <T extends NumericProperties>(
    augendScamon: Scamon<T & {rational: true}>,
    addendScamon: Scamon<T & {rational: true}>,
): Scamon<T & {direction: undefined, integer: false, rational: true}> =>
    ({
        monzo: addMonzos(augendScamon.monzo, addendScamon.monzo),
    }) as Scamon<T & {direction: undefined, integer: false, rational: true}>

const subtractRationalScamons = <T extends NumericProperties>(
    minuendScamon: Scamon<T & {rational: true}>,
    subtrahendScamon: Scamon<T & {rational: true}>,
): Scamon<T & {direction: undefined, integer: false, rational: true}> =>
    ({
        monzo: subtractMonzos(minuendScamon.monzo, subtrahendScamon.monzo),
    }) as Scamon<T & {direction: undefined, integer: false, rational: true}>

const computeRationalScamonGeometricMean = (
    ...rationalScamons: Array<Scamon<{rational: true}>>
): Mean<{of: Scamon<{rational: false}>, meanType: MeanType.GEOMETRIC}> => {
    return {
        monzo: sumMonzos(...rationalScamons.map(computeRationalMonzoFromRationalScamon)),
        scaler: [1, rationalScamons.length] as Quotient,
    } as Mean<{of: Scamon<{rational: false}>, meanType: MeanType.GEOMETRIC}>
}

const sumRationalScamons = <T extends NumericProperties>(
    ...rationalScamons: Array<Scamon<T & {rational: true}>>
): Scamon<T & {direction: undefined, integer: false, rational: true}> =>
    ({
        monzo: sumMonzos(...rationalScamons.map(computeRationalMonzoFromRationalScamon)),
    }) as Scamon<T & {direction: undefined, integer: false, rational: true}>

export {
    subtractRationalScamons,
    addRationalScamons,
    computeRationalScamonGeometricMean,
    sumRationalScamons,
}
