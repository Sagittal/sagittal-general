import {
    computeLowestTermsRationalQuotient,
    computeRationalVectorFromRationalQuotient,
    isQuotientRational,
    isQuotientSub,
    Quotient,
    Rational,
    Super,
} from "../../math"
import { Two3FreeClass } from "../../music"
import { Io } from "../types"
import { parseQuotient } from "./quotient"

const parse23FreeClass = (two3FreeClassIo: Io): Two3FreeClass => {
    const two3FreeQuotient = parseQuotient(two3FreeClassIo)

    if (!isQuotientRational(two3FreeQuotient)) {
        throw new Error(
            `Attempted to parse ${two3FreeClassIo} to a 2,3-free class, but they must be rational`,
        )
    }
    if (isQuotientSub(two3FreeQuotient)) {
        throw new Error(`Attempted to parse ${two3FreeClassIo} to a 2,3-free class, but they must be sub.`)
    }

    const reducedTwo3FreeQuotient = computeLowestTermsRationalQuotient(two3FreeQuotient) as Quotient<
        Rational &
            Super & {
                rough: 5
            }
    >

    return {
        vector: computeRationalVectorFromRationalQuotient(reducedTwo3FreeQuotient),
    } as Two3FreeClass
}

export { parse23FreeClass }
