import {count, product, sum} from "../../typedOperations"
import {Mean, MeanType} from "../../types"
import {NumericProperties} from "../types"
import {Decimal} from "./types"

const mod = <T extends NumericProperties>(dividend: Decimal<T>, divisor: Decimal<T>): Decimal<T & {integer: false}> =>
    dividend % divisor as Decimal<T>

const reciprocal = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & {integer: false}> =>
    1 / decimal as Decimal<T & {integer: false}>

const sqrt = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & {integer: false}> =>
    Math.sqrt(decimal) as Decimal<T & {integer: false}>

const computeArithmeticMean = <T extends NumericProperties>(
    ...decimals: Array<Decimal<T>>
): Mean<{of: Decimal<T>, meanType: MeanType.ARITHMETIC}> =>
    sum(...decimals) / count(decimals) as Mean<{of: Decimal<T>, meanType: MeanType.ARITHMETIC}>

const computeGeometricMean = <T extends NumericProperties>(
    ...decimals: Array<Decimal<T>>
): Mean<{of: Decimal<T>, meanType: MeanType.GEOMETRIC}> =>
    product(...decimals) ** reciprocal(count(decimals)) as Mean<{of: Decimal<T>, meanType: MeanType.GEOMETRIC}>

export {
    mod,
    reciprocal,
    sqrt,
    computeArithmeticMean,
    computeGeometricMean,
}
