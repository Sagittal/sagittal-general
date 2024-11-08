import { Index } from "../../types"
import { Decimal, Integer } from "../numeric"
import { SMOOTH_ROUGH_OFFSET } from "./constants"
import { computeRoughnessIndex } from "./roughness"
import { Prime, Roughness, Smoothness } from "./types"

const computeSmoothnessIndex = (smoothness: Smoothness): Index<Prime> =>
    (computeRoughnessIndex(smoothness as Decimal<Integer> as Roughness) + SMOOTH_ROUGH_OFFSET) as Index<Prime>

export { computeSmoothnessIndex }
