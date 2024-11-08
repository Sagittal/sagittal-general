import { NoProperties } from "../../code"
import { Char } from "../../io"
import { Decimal, Integer, NumericProperties, Prime, Rational } from "../../math"
import { Count } from "../../types"
import { EdoStep } from "../edo"

type Temperament = { _TemperamentBrand: boolean }

type Generator = number & { _GeneratorBrand: boolean }

type EtStep = EdoStep & Generator

type EtName = string & { _EtNameMeaningBrand: boolean }

type Per<
    OutT extends number = number,
    InT extends number = number,
    NumericT extends NumericProperties = NoProperties,
> = number & { _OutBrand: OutT } & { _InBrand: InT } & NumericT

type Map<T extends NumericProperties = NoProperties> = Array<Per<Count<EtStep>, Prime, T>>

type MappingRow<T extends NumericProperties = NoProperties> = Array<Per<Count<Generator>, Prime, T>>

type Mapping<T extends NumericProperties = NoProperties> = MappingRow<T>[]

type NumericPropertyTranslationForMappedVector<VectorT, MapT> = (VectorT extends Rational | Integer
    ? MapT extends Rational | Integer
        ? Rational
        : NoProperties
    : NoProperties) &
    (VectorT extends Integer ? (MapT extends Integer ? Integer : NoProperties) : NoProperties)

type GeneratorCount<
    VectorT extends NumericProperties,
    MapT extends NumericProperties,
    GeneratorT extends Generator,
> = Count<GeneratorT> & Decimal<NumericPropertyTranslationForMappedVector<VectorT, MapT>>

type StepCount<VectorT extends NumericProperties, MapT extends NumericProperties> = GeneratorCount<
    VectorT,
    MapT,
    EtStep
>

type Wart = Char & { _WartBrand: boolean }

export { Temperament, Generator, EtStep, EtName, Per, Map, MappingRow, Mapping, Wart, StepCount }
