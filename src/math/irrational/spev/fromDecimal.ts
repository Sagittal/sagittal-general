import {shallowClone} from "../../../code"
import {BASE_2} from "../../constants"
import {Decimal, NumericProperties, Spev} from "../../numeric"
import {log} from "../../typedOperations"
import {IRRATIONAL_SPEV_BASE_PEV} from "./constants"

const computeIrrationalSpevFromDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "rational">>,
): Spev<T & {rational: false}> =>
    ({
        pev: shallowClone(IRRATIONAL_SPEV_BASE_PEV),
        scaler: [log(decimal, BASE_2) as Decimal, 1],
    }) as Spev<T & {rational: false}>

export {
    computeIrrationalSpevFromDecimal,
}
