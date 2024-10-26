import { Decimal, Vector, NumericProperties, Quotient, ScaledVector } from "../../numeric"
import {
    computeRationalVectorFromRationalDecimal,
    computeRationalVectorFromRationalQuotient,
} from "../vector"

const computeRationalScaledVectorFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & { rational: true }>,
): ScaledVector<T & { rational: true }> =>
    ({
        vector: computeRationalVectorFromRationalDecimal(rationalDecimal),
    } as ScaledVector<T & { rational: true }>)

const computeRationalScaledVectorFromRationalVector = <T extends NumericProperties>(
    rationalVector: Vector<T & { rational: true }>,
): ScaledVector<T & { rational: true }> => ({ vector: rationalVector } as ScaledVector<T & { rational: true }>)

const computeRationalScaledVectorFromRationalQuotient = <T extends NumericProperties>(
    rationalQuotient: Quotient<T & { rational: true }>,
): ScaledVector<T & { rational: true }> =>
    computeRationalScaledVectorFromRationalVector(computeRationalVectorFromRationalQuotient(rationalQuotient))

export {
    computeRationalScaledVectorFromRationalDecimal,
    computeRationalScaledVectorFromRationalVector,
    computeRationalScaledVectorFromRationalQuotient,
}
