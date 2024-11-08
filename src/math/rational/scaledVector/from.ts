import { Decimal, Vector, Quotient, ScaledVector, Rational } from "../../numeric"
import {
    computeRationalVectorFromRationalDecimal,
    computeRationalVectorFromRationalQuotient,
} from "../vector"

const computeRationalScaledVectorFromRationalDecimal = <T extends Rational>(
    rationalDecimal: Decimal<T>,
): ScaledVector<T> =>
    ({
        vector: computeRationalVectorFromRationalDecimal(rationalDecimal),
    }) as ScaledVector<T>

const computeRationalScaledVectorFromRationalVector = <T extends Rational>(
    rationalVector: Vector<T>,
): ScaledVector<T> => ({ vector: rationalVector }) as ScaledVector<T>

const computeRationalScaledVectorFromRationalQuotient = <T extends Rational>(
    rationalQuotient: Quotient<T>,
): ScaledVector<T> =>
    computeRationalScaledVectorFromRationalVector(computeRationalVectorFromRationalQuotient(rationalQuotient))

export {
    computeRationalScaledVectorFromRationalDecimal,
    computeRationalScaledVectorFromRationalVector,
    computeRationalScaledVectorFromRationalQuotient,
}
