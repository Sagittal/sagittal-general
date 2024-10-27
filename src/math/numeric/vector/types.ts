import { Prime } from "../../rational"
import { Exponent } from "../../types"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
} from "../types"

type PrimeCount<T extends NumericProperties = { rational: true }> = Exponent<Prime> & NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>

type Vector<T extends NumericProperties = { rational: true }> = PrimeCount<T>[] & NumericPropertyEffects<T>

export {
    PrimeCount,
    Vector,
}
