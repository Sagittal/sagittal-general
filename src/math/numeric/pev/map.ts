import { formatMap, formatPev } from "../../../io"
import { Step } from "../../../types"
import { Prime } from "../../rational"
import { Exponent } from "../../types"
import { NumericProperties } from "../types"
import { Map, Pev } from "./types"

const mapPev = <T extends NumericProperties>(
    pev: Pev,
    map: Map<T>,
): Step<T> => {
    if (map.length < pev.length) {
        throw new Error(
            `Please provide a map with a prime limit at least as high as the pev it is mapping. This map ${formatMap(
                map,
            )} could not map pev ${formatPev(pev)}.`,
        )
    }

    return pev.reduce(
        (
            step: Step<T>,
            primeExponent: Exponent<Prime>,
            index: number,
        ): Step<T> => {
            return (step + primeExponent * map[index]) as Step<T>
        },
        0 as Step<T>,
    )
}

export { mapPev }
