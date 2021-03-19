import {isUndefined} from "../../../code"
import {NumericProperties, Quotient, Spev} from "../../numeric"

const isSpevRational = <T extends NumericProperties>(
    candidateRationalSpev: Spev<T>,
): candidateRationalSpev is Spev<T & {rational: true}> =>
    isUndefined((candidateRationalSpev as {scaler: Quotient}).scaler)

export {
    isSpevRational,
}
