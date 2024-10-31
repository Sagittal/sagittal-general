import { Maybe } from "../code"
import { NumericProperties, ScaledVector } from "../math"
import { Extrema, Name } from "../types"

type Cents = number & { _CentsBrand: boolean }

type Exclusive = boolean | [Maybe<boolean>, Maybe<boolean>]

type Zone<T extends { of?: unknown } & NumericProperties = {}> = {
    extrema: Extrema<{ of: ScaledVector; open: true }>
    exclusive?: Exclusive
} & (T extends { of: unknown } ? { _ZoneOfBrand: T["of"] } : {})

type CommaMean<T extends NumericProperties = {}> = {
    name: Name<CommaMean>
    pitch: ScaledVector<T & { rational: false }>
}

type Octaves = number & { _OctavesBrand: boolean }

type Error = Cents & { _ErrorBrand: boolean }

export { Cents, Zone, Exclusive, CommaMean, Octaves, Extrema, Error }
