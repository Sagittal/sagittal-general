import { Decimal, Vector, NumericProperties, Quotient, ScaledVector } from "../../numeric"
import { Rational } from "../types"
import {
    computeRationalVectorFromRationalDecimal,
    computeRationalVectorFromRationalQuotient,
} from "../vector"

const computeRationalScaledVectorFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & Rational>,
): ScaledVector<T & Rational> =>
    ({
        vector: computeRationalVectorFromRationalDecimal(rationalDecimal),
    }) as ScaledVector<T & Rational>

const computeRationalScaledVectorFromRationalVector = <T extends NumericProperties>(
    rationalVector: Vector<T & Rational>,
): ScaledVector<T & Rational> => ({ vector: rationalVector }) as ScaledVector<T & Rational>

const computeRationalScaledVectorFromRationalQuotient = <T extends NumericProperties>(
    rationalQuotient: Quotient<T & Rational>,
): ScaledVector<T & Rational> =>
    computeRationalScaledVectorFromRationalVector(computeRationalVectorFromRationalQuotient(rationalQuotient))

export {
    computeRationalScaledVectorFromRationalDecimal,
    computeRationalScaledVectorFromRationalVector,
    computeRationalScaledVectorFromRationalQuotient,
}
