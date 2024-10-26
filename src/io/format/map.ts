import { Vector } from "../../math"
import { formatVector } from "./vector"
import { FormatVectorOrMapOptions, Formatted } from "./types"
import { Map } from "../../music"

const formatMap = (map: Map, options?: FormatVectorOrMapOptions): Formatted<Map> =>
    formatVector(map as unknown as Vector, options)
        .replace("[", "⟨")
        .replace("⟩", "]") as Formatted<Map>

export { formatMap }
