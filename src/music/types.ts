import { Maybe, NoProperties } from "../code"
import { Decimal, Irrational, NumericProperties, ScaledVector } from "../math"
import { Extrema, Name } from "../types"

type Cents = Decimal & { _CentsBrand: boolean }

type Exclusive = boolean | [Maybe<boolean>, Maybe<boolean>]

type Zone<T extends { of?: unknown } & NumericProperties = NoProperties> = {
    extrema: Extrema<{ of: ScaledVector<T>; open: true }>
    exclusive?: Exclusive
} & (T extends { of: unknown } ? { _ZoneOfBrand: T["of"] } : unknown)

type CommaMean<T extends NumericProperties = NoProperties> = {
    name: Name<CommaMean>
    pitch: ScaledVector<T & Irrational>
}

type Octaves = Decimal & { _OctavesBrand: boolean }

type Error = Cents & { _ErrorBrand: boolean }

export { Cents, Zone, Exclusive, CommaMean, Octaves, Extrema, Error }
