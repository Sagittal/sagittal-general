import {indexOfFinalElement} from "../../code"
import {Exponent, mod, NumericProperties, Pev, Prime} from "../../math"
import {BLANK, COMMA, SPACE} from "../constants"
import {Io} from "../types"
import {spacePevOrMappingExponent} from "./spacePevOrMappingExponent"
import {FormatPevOrMappingOptions, Formatted} from "./types"

const maybeSpacePevOrMappingExponent = (primeExponent: Exponent<Prime>, {abbreviated}: {abbreviated: boolean}): Io =>
    abbreviated ?
        primeExponent.toString() :
        spacePevOrMappingExponent(primeExponent)

const formatPev = <T extends NumericProperties>(
    pev: Pev<T>,
    {punctuated = false, abbreviated = false}: FormatPevOrMappingOptions = {},
): Formatted<Pev<T>> => {
    const buffer = abbreviated ? BLANK : SPACE

    let contents
    if (punctuated) {
        const punctuatedSeparator = `${COMMA}${buffer}`

        // Take care of the first 2 elements, which are special
        const two3FreePev: Pev<T & {rough: 5}> = pev.splice(2) as Pev<T & {rough: 5}>
        contents = pev.map((primeExponent: Exponent<Prime>): Io =>
            maybeSpacePevOrMappingExponent(primeExponent, {abbreviated}),
        ).join(SPACE) + punctuatedSeparator

        let index = 0
        while (index < two3FreePev.length) {
            const primeExponent = two3FreePev[index]
            const newContent = maybeSpacePevOrMappingExponent(primeExponent, {abbreviated})
            contents = contents + newContent
            if (index < indexOfFinalElement(two3FreePev)) {
                if (mod(index, 3) === 2) {
                    contents = contents + punctuatedSeparator
                } else {
                    contents = contents + SPACE
                }
            }
            index += 1
        }
    } else {
        contents = pev.map((primeExponent: Exponent<Prime>): Io =>
            maybeSpacePevOrMappingExponent(primeExponent, {abbreviated}),
        ).join(SPACE)
    }

    if (abbreviated && punctuated) {
        contents = contents
            .replace(/^0 0/, BLANK)
            .replace(/^0 /, BLANK)
            .replace(/0 0 0/g, BLANK)
    }

    return `[${buffer}${contents}${buffer}⟩` as Formatted<Pev<T>>
}

export {
    formatPev,
}
