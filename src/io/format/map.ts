import { NumericProperties, Vector } from "../../math"
import { Map } from "../../music"
import { FormatVectorOrMapOptions, Formatted } from "./types"
import { formatVector } from "./vector"

const formatMap = <T extends NumericProperties>(
    map: Map<T>,
    options?: FormatVectorOrMapOptions,
): Formatted<Map> =>
    formatVector(map as unknown as Vector, options)
        .replace("[", "⟨")
        .replace("⟩", "]") as Formatted<Map>

export { formatMap }
