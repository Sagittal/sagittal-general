import { Noninteger } from "../../irrational"
import { count, product, sum } from "../../typedOperations"
import { Mean, MeanType } from "../../types"
import { NumericProperties } from "../types"
import { Decimal } from "./types"

const mod = <T extends NumericProperties>(
    dividend: Decimal<T>,
    divisor: Decimal<T>,
): Decimal<T & Noninteger> => (((dividend % divisor) + divisor) % divisor) as Decimal<T & Noninteger>

const reciprocal = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Noninteger> =>
    (1 / decimal) as Decimal<T & Noninteger>

const sqrt = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & Noninteger> =>
    Math.sqrt(decimal) as Decimal<T & Noninteger>

const computeArithmeticMean = <T extends NumericProperties>(
    ...decimals: Array<Decimal<T>>
): Mean<{ of: Decimal<T>; meanType: MeanType.ARITHMETIC }> =>
    (sum(...decimals) / count(decimals)) as Mean<{ of: Decimal<T>; meanType: MeanType.ARITHMETIC }>

const computeGeometricMean = <T extends NumericProperties>(
    ...decimals: Array<Decimal<T>>
): Mean<{ of: Decimal<T>; meanType: MeanType.GEOMETRIC }> =>
    (product(...decimals) ** reciprocal(count(decimals))) as Mean<{
        of: Decimal<T>
        meanType: MeanType.GEOMETRIC
    }>

export { mod, reciprocal, sqrt, computeArithmeticMean, computeGeometricMean }
