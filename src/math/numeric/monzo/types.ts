import {Ed, Step, Window} from "../../../types"
import {Prime} from "../../rational"
import {Exponent, Max} from "../../types"
import {Decimal} from "../decimal"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms,
} from "../types"

type Monzo<T extends NumericProperties = {}> =
    Array<Decimal<NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T>> & Exponent<Prime>>
    & NumericPropertyEffects<T>

type Val<T extends NumericProperties = {}> = Array<Exponent<Step<T>>>

interface PatentValOptions<T extends Window> {
    ed: Ed<T>,
    window: T,
    primeLimit: Max<Max<Prime>>
}

export {
    Val,
    PatentValOptions,
    Monzo,
}
