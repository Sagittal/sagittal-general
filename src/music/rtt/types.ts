import { Max, NumericProperties, Prime } from "../../math"
import { Count } from "../../types"
import { Edo, EdoStep } from "../edo"
import { Cents } from "../types"

type Temperament = { _TemperamentBrand: boolean }

type Generator = number & { _GeneratorBrand: boolean }

type EtStep = EdoStep & Generator

interface SimpleMapOptions {
    edo: Edo
    primeLimit: Max<Max<Prime>>
}

type EtName = string & { _EtNameMeaningBrand: boolean }

type Per<
    OutT extends number = number,
    InT extends number = number,
    NumericT extends NumericProperties = {},
> = number & { _OutBrand: OutT } & { _InBrand: InT } & NumericT

type Map<T extends NumericProperties = {}> = Array<Per<Count<EtStep>, Prime, T>>

type MappingRow<T extends NumericProperties = {}> = Array<Per<Count<Generator>, Prime, T>>

type Mapping<T extends NumericProperties = {}> = MappingRow<T>[]

type NumericPropertyTranslationForMappedVector<VectorT, MapT> = (VectorT extends
    | { rational: true }
    | { integer: true }
    ? MapT extends { rational: true } | { integer: true }
        ? { rational: true }
        : {}
    : {}) &
    (VectorT extends { integer: true } ? (MapT extends { integer: true } ? { integer: true } : {}) : {})

type Error = Cents & { _ErrorBrand: boolean }

export {
    Temperament,
    Generator,
    EtStep,
    SimpleMapOptions,
    EtName,
    Per,
    Map,
    MappingRow,
    Mapping,
    NumericPropertyTranslationForMappedVector,
    Error,
}
