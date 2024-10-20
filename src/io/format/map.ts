import { Map, Pev } from "../../math"
import { formatPev } from "./pev"
import { FormatPevOrMapOptions, Formatted } from "./types"

const formatMap = (
    map: Map,
    options?: FormatPevOrMapOptions,
): Formatted<Map> =>
    formatPev(map as unknown as Pev, options)
        .replace("[", "⟨")
        .replace("⟩", "]") as Formatted<Map>

export { formatMap }
