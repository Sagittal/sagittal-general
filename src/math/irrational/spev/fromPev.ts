import {computeDecimalFromPev, Pev, NumericProperties, Spev} from "../../numeric"
import {computeIrrationalSpevFromDecimal} from "./fromDecimal"

const computeIrrationalSpevFromPev = <T extends NumericProperties>(
    pev: Pev<Omit<T, "rational">>,
): Spev<T & {rational: false}> =>
    computeIrrationalSpevFromDecimal(computeDecimalFromPev(pev))

export {
    computeIrrationalSpevFromPev,
}
