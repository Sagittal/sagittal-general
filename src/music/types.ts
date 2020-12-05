import {Maybe} from "../code"
import {NumericProperties, Scamon} from "../math"
import {Extrema, Name} from "../types"

type Cents = number & {_CentsBrand: boolean}

type Exclusive = boolean | [Maybe<boolean>, Maybe<boolean>]

type Zone<T extends {of?: unknown} & NumericProperties = {}> =
    {
        extrema: Extrema<{of: Scamon, open: true}>,
        exclusive?: Exclusive
    }
    & (T extends {of: unknown} ? {_ZoneOfBrand: T["of"]} : {})

type CommaMean<T extends NumericProperties = {}> = {
    name: Name<CommaMean>,
    pitch: Scamon<T & {rational: false}>,
}

export {
    Cents,
    Zone,
    Exclusive,
    CommaMean,
}
