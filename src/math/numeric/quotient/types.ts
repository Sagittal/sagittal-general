import { Decimal } from "../decimal"
import {
    NumericProperties,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
    Rational,
} from "../types"

type Numerator<T extends NumericProperties = Rational> = Decimal<
    T & NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
> & {
    _NumeratorBrand: boolean
}
type Denominator<T extends NumericProperties = Rational> = Decimal<
    T & NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
> & {
    _DenominatorBrand: boolean
}

type Quotient<T extends NumericProperties = Rational> = [Numerator<T>, Denominator<T>] & T

enum QuotientPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type QuotientPart<T extends NumericProperties = Rational> = Numerator<T> | Denominator<T>

export { QuotientPartType, Quotient, QuotientPart, Numerator, Denominator }
