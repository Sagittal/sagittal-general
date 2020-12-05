import {Denominator, NumericProperties, Quotient, QuotientPart} from "../../math"
import {BLANK, SUPERSCRIPT_NUMBERS} from "../constants"
import {split} from "../typedOperations"
import {Char, Io} from "../types"
import {DOT_OPERATOR} from "./constants"
import {parseInteger} from "./decimal"

const superscriptNumbers = SUPERSCRIPT_NUMBERS.join()

const parseQuotient = <T extends NumericProperties>(quotientIo: Io): Quotient<T> => {
    const quotient = split(quotientIo, /[\/:]/).map((quotientPartIo: Io): QuotientPart => {
        if (quotientPartIo.match(new RegExp(`[${superscriptNumbers}.⋅]`))) {
            const factorPowers = quotientPartIo.match(new RegExp(`[⋅]`)) ?
                quotientPartIo.split(DOT_OPERATOR) :
                quotientPartIo.split(".")

            return factorPowers.reduce(
                (product: QuotientPart, factorPower: string): QuotientPart => {
                    const exponentPartOfFactorPower: string = factorPower.replace(new RegExp(`[^${superscriptNumbers}]`, "g"), BLANK)
                    const basePartOfFactorPower = factorPower.replace(exponentPartOfFactorPower, BLANK)

                    const base = parseInteger(basePartOfFactorPower as Io)
                    const power = exponentPartOfFactorPower === BLANK ?
                        1 :
                        SUPERSCRIPT_NUMBERS.indexOf(exponentPartOfFactorPower as Char)

                    return product * base ** power as QuotientPart
                },
                1 as QuotientPart,
            )
        } else {
            return parseFloat(quotientPartIo) as QuotientPart
        }
    })

    if (quotient.length === 1) {
        quotient.push(1 as Denominator)
    }

    if (quotientIo.includes(":")) {
        quotient.reverse()
    }

    return quotient as Quotient<T>
}

export {
    parseQuotient,
}
