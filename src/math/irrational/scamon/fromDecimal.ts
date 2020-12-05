import {shallowClone} from "../../../code"
import {BASE_2} from "../../constants"
import {Decimal, NumericProperties, Scamon} from "../../numeric"
import {log} from "../../typedOperations"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "./constants"

const computeIrrationalScamonFromDecimal = <T extends NumericProperties>(
    decimal: Decimal<Omit<T, "rational">>,
): Scamon<T & {rational: false}> =>
    ({
        monzo: shallowClone(IRRATIONAL_SCAMON_BASE_MONZO),
        scaler: [log(decimal, BASE_2) as Decimal, 1],
    }) as Scamon<T & {rational: false}>

export {
    computeIrrationalScamonFromDecimal,
}
