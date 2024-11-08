import { Prime } from "../../rational"
import { Exponent } from "../../types"
import { Decimal } from "../decimal"
import {
    NumericProperties,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
    Rational,
} from "../types"

type PrimeCount<T extends NumericProperties = Rational> = Exponent<Prime> &
    Decimal<NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>>

// Prime-count vector, but we're calling it "vector" for short; generator-count vectors may come later in the RTT module
type Vector<T extends NumericProperties = Rational> = PrimeCount<T>[] & T

export { PrimeCount, Vector }
