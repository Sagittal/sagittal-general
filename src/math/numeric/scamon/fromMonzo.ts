import {computeIrrationalScamonFromMonzo} from "../../irrational"
import {computeRationalScamonFromRationalMonzo, isMonzoRational} from "../../rational"
import {Monzo} from "../monzo"
import {NumericProperties} from "../types"
import {Scamon} from "./types"

const computeScamonFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Scamon<T> =>
    isMonzoRational(monzo) ?
        computeRationalScamonFromRationalMonzo(monzo) :
        computeIrrationalScamonFromMonzo(monzo)

export {
    computeScamonFromMonzo,
}
