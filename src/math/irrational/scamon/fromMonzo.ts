import {computeDecimalFromMonzo, Monzo, NumericProperties, Scamon} from "../../numeric"
import {computeIrrationalScamonFromDecimal} from "./fromDecimal"

const computeIrrationalScamonFromMonzo = <T extends NumericProperties>(
    monzo: Monzo<Omit<T, "rational">>,
): Scamon<T & {rational: false}> =>
    computeIrrationalScamonFromDecimal(computeDecimalFromMonzo(monzo))

export {
    computeIrrationalScamonFromMonzo,
}
