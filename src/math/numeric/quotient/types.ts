import {Decimal} from "../decimal"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms,
} from "../types"

type NumericPropertyTranslationForQuotientsToTheirQuotientParts<T extends NumericProperties = {}> =
    (T extends {rough: number} ? {rough: T["rough"]} : {})
    & (T extends {smooth: number} ? {smooth: T["smooth"]} : {})

type Numerator = number & {_NumeratorBrand: boolean}
type Denominator = number & {_DenominatorBrand: boolean}

type Quotient<T extends NumericProperties = {}> = [
        Numerator & Decimal<NumericPropertyTranslationForQuotientsToTheirQuotientParts<T>
        & NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T>>,
        Denominator & Decimal<NumericPropertyTranslationForQuotientsToTheirQuotientParts<T>
        & NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T>>
] & NumericPropertyEffects<T>

enum QuotientPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type QuotientPart = Numerator | Denominator

export {
    QuotientPartType,
    Quotient,
    QuotientPart,
    Numerator,
    Denominator,
}
