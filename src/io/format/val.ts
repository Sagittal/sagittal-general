import {Exponent, Monzo, Val} from "../../math"
import {formatMonzo} from "./monzo"
import {FormatMonzoOrValOptions, Formatted} from "./types"

const formatVal = (val: Val, options?: FormatMonzoOrValOptions): Formatted<Val> =>
    formatMonzo(val as Exponent[] as Monzo, options)
        .replace("[", "⟨")
        .replace("⟩", "]") as Formatted<Val>

export {
    formatVal,
}
