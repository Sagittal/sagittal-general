import {Exponent, Mapping, Pev} from "../../math"
import {formatPev} from "./pev"
import {FormatPevOrMappingOptions, Formatted} from "./types"

const formatMapping = (mapping: Mapping, options?: FormatPevOrMappingOptions): Formatted<Mapping> =>
    formatPev(mapping as Exponent[] as Pev, options)
        .replace("[", "⟨")
        .replace("⟩", "]") as Formatted<Mapping>

export {
    formatMapping,
}
