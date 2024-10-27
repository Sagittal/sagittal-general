import { Count } from "../../../types"
import { Prime } from "../../rational"
import { Exponent } from "../../types"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
} from "../types"

type Vector<T extends NumericProperties = {}> = Array<
    Count<Prime> & Exponent<Prime> & NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
> &
    NumericPropertyEffects<T>

export { Vector }
