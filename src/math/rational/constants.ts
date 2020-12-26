import {Index} from "../../types"
import {Decimal} from "../numeric"
import {Prime, Roughness, Smoothness} from "./types"

const TWO_PRIME_INDEX: Index<Prime> = 0 as Index<Prime>
const THREE_PRIME_INDEX: Index<Prime> = 1 as Index<Prime>
const FIVE_PRIME_INDEX: Index<Prime> = 2 as Index<Prime>

const THREE_ROUGHNESS = 3 as 3 & Roughness
const FIVE_ROUGHNESS = 5 as 5 & Roughness

const THREE_SMOOTHNESS = 3 as 3 & Smoothness
const FIVE_SMOOTHNESS = 5 as 5 & Smoothness

const ONE = 1 as Decimal<{integer: true}>

const SMOOTH_ROUGH_OFFSET = 1

export {
    TWO_PRIME_INDEX,
    THREE_PRIME_INDEX,
    FIVE_PRIME_INDEX,
    FIVE_ROUGHNESS,
    ONE,
    THREE_ROUGHNESS,
    THREE_SMOOTHNESS,
    FIVE_SMOOTHNESS,
    SMOOTH_ROUGH_OFFSET,
}
