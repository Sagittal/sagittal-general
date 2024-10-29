import { Max, NumericProperties, Prime } from "../../math"
import { Edo } from "../edo"
import { computeMap } from "./map"
import { Map } from "./types"

const computeSimpleMap = <T extends NumericProperties>(edo: Edo, primeLimit: Max<Prime>): Map<T> =>
    computeMap(edo, primeLimit)

export { computeSimpleMap }
