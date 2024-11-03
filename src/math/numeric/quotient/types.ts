import { NoProperties } from "../../../code"
import { Rational } from "../../rational"
import { Decimal } from "../decimal"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
} from "../types"

type NumericPropertyTranslationForQuotientsToTheirQuotientParts<T extends NumericProperties = NoProperties> =
    (T extends {
        rough: number
    }
        ? T & { rough: T["rough"] }
        : T) &
        (T extends { smooth: number } ? T & { smooth: T["smooth"] } : T)

type Numerator = Decimal & { _NumeratorBrand: boolean }
type Denominator = Decimal & { _DenominatorBrand: boolean }

type Quotient<T extends NumericProperties = Rational> = [
    Numerator &
        Decimal<
            NumericPropertyTranslationForQuotientsToTheirQuotientParts<T> &
                NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
        >,
    Denominator &
        Decimal<
            NumericPropertyTranslationForQuotientsToTheirQuotientParts<T> &
                NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
        >,
] &
    NumericPropertyEffects<T>

enum QuotientPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type QuotientPart = Numerator | Denominator

export { QuotientPartType, Quotient, QuotientPart, Numerator, Denominator }
