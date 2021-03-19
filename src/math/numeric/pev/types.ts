import {Ed, Step, Window} from "../../../types"
import {Prime} from "../../rational"
import {Exponent, Max} from "../../types"
import {Decimal} from "../decimal"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForPevsAndQuotientsToTheirTerms,
} from "../types"

type Pev<T extends NumericProperties = {}> =
    Array<Decimal<NumericPropertyTranslationForPevsAndQuotientsToTheirTerms<T>> & Exponent<Prime>>
    & NumericPropertyEffects<T>

type Mapping<T extends NumericProperties = {}> = Array<Exponent<Step<T>>>

interface StandardMappingOptions<T extends Window> {
    ed: Ed<T>,
    window: T,
    primeLimit: Max<Max<Prime>>
}

export {
    Mapping,
    StandardMappingOptions,
    Pev,
}
