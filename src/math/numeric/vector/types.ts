import { Prime, Rational } from "../../rational"
import { Exponent } from "../../types"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
} from "../types"

type PrimeCount<T extends NumericProperties = Rational> = Exponent<Prime> &
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>

type Vector<T extends NumericProperties = Rational> = PrimeCount<T>[] & NumericPropertyEffects<T>

export { PrimeCount, Vector }
