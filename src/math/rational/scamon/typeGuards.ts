import {isUndefined} from "../../../code"
import {NumericProperties, Quotient, Scamon} from "../../numeric"

const isScamonRational = <T extends NumericProperties>(
    candidateRationalScamon: Scamon<T>,
): candidateRationalScamon is Scamon<T & {rational: true}> =>
    isUndefined((candidateRationalScamon as {scaler: Quotient}).scaler)

export {
    isScamonRational,
}
