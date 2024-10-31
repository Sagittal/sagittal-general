import { Char } from "../../io"
import { NumericProperties, Prime } from "../../math"
import { Count } from "../../types"
import { EdoStep } from "../edo"

type Temperament = { _TemperamentBrand: boolean }

type Generator = number & { _GeneratorBrand: boolean }

type EtStep = EdoStep & Generator

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

type Wart = Char & { _WartBrand: boolean }

export {
    Temperament,
    Generator,
    EtStep,
    EtName,
    Per,
    Map,
    MappingRow,
    Mapping,
    NumericPropertyTranslationForMappedVector,
    Wart,
}
