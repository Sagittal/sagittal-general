import { Maybe } from "../code"
import { Irrational, ScaledVector } from "../math"
import { Extrema, Name } from "../types"

type Cents = number & { _CentsBrand: boolean }

type Exclusive = boolean | [Maybe<boolean>, Maybe<boolean>]

type CommaMean = {
    name: Name<CommaMean>
    pitch: ScaledVector<Irrational>
}

type Octaves = number & { _OctavesBrand: boolean }

type Error = Cents & { _ErrorBrand: boolean }

export { Cents, Exclusive, CommaMean, Octaves, Extrema, Error }
