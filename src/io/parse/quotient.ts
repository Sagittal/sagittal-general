import { indexOf } from "../../code"
import { computeSuperQuotient, Denominator, NumericProperties, Quotient, QuotientPart } from "../../math"
import { BLANK, SUPERSCRIPT_NUMBERS } from "../constants"
import { stringify } from "../stringify"
import { join, split } from "../typedOperations"
import { Io } from "../types"
import { DOT_OPERATOR } from "./constants"
import { parseInteger } from "./decimal"

const EXPONENT_NUMBERS = join(SUPERSCRIPT_NUMBERS, BLANK)
const MULTIPLICATION_SYMBOLS = `${DOT_OPERATOR}.*`

const parseSuperscriptNumber = (superscriptNumberText: string): number => {
    const superscriptNumberChars = superscriptNumberText.split(BLANK)
    const numberChars = superscriptNumberChars.map((superscriptNumberChar: string): string => {
        return stringify(indexOf(SUPERSCRIPT_NUMBERS, superscriptNumberChar))
    })
    const numberString = join(numberChars, BLANK)

    return parseInt(numberString)
}

const parseQuotient = <T extends NumericProperties>(quotientIo: Io): Quotient<T> => {
    const quotient = split(quotientIo.replace(/[()]/g, BLANK), /[/:]/).map(
        (quotientPartIo: Io): QuotientPart<T> => {
            if (quotientPartIo.match(new RegExp(`[${EXPONENT_NUMBERS}${MULTIPLICATION_SYMBOLS}]`))) {
                const factorPowers = quotientPartIo.split(new RegExp(`[${MULTIPLICATION_SYMBOLS}]`))

                return factorPowers.reduce(
                    (product: QuotientPart<T>, factorPower: string): QuotientPart<T> => {
                        const ascii = !factorPower.match(`[${EXPONENT_NUMBERS}]`)
                        const exponentPartOfFactorPower: string = ascii
                            ? factorPower.match(/\^/)
                                ? factorPower.replace(/.*\^/, BLANK)
                                : BLANK
                            : factorPower.replace(new RegExp(`[^${EXPONENT_NUMBERS}]`, "g"), BLANK)

                        let basePartOfFactorPower = factorPower.replace(exponentPartOfFactorPower, BLANK)
                        if (ascii) basePartOfFactorPower = basePartOfFactorPower.replace(/\^/, BLANK)

                        const base = parseInteger(basePartOfFactorPower as Io)
                        const power =
                            exponentPartOfFactorPower === BLANK
                                ? 1
                                : ascii
                                  ? parseInt(exponentPartOfFactorPower)
                                  : parseSuperscriptNumber(exponentPartOfFactorPower)

                        return (product * base ** power) as QuotientPart<T>
                    },
                    1 as QuotientPart<T>,
                )
            } else {
                return parseFloat(quotientPartIo) as QuotientPart<T>
            }
        },
    )

    if (quotient.length === 1) {
        quotient.push(1 as Denominator<T>)
    }

    if (quotientIo.includes(":")) {
        return computeSuperQuotient(quotient as Quotient<T>) as Quotient<T>
    }

    return quotient as Quotient<T>
}

export { parseQuotient }
