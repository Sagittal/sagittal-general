import {indexOfFinalElement} from "../../code"
import {Exponent, Monzo, NumericProperties, Prime} from "../../math"
import {BLANK, COMMA, SPACE} from "../constants"
import {Io} from "../types"
import {spaceMonzoOrValExponent} from "./spaceMonzoOrValExponent"
import {FormatMonzoOrValOptions, Formatted} from "./types"

const maybeSpaceMonzoOrValExponent = (primeExponent: Exponent<Prime>, {abbreviated}: {abbreviated: boolean}): Io =>
    abbreviated ?
        primeExponent.toString() :
        spaceMonzoOrValExponent(primeExponent)

const formatMonzo = <T extends NumericProperties>(
    monzo: Monzo<T>,
    {punctuated = false, abbreviated = false}: FormatMonzoOrValOptions = {},
): Formatted<Monzo<T>> => {
    const buffer = abbreviated ? BLANK : SPACE

    let contents
    if (punctuated) {
        const punctuatedSeparator = `${COMMA}${buffer}`

        // Take care of the first 2 elements, which are special
        const two3FreeMonzo: Monzo<T & {rough: 5}> = monzo.splice(2) as Monzo<T & {rough: 5}>
        contents = monzo.map((primeExponent: Exponent<Prime>): Io =>
            maybeSpaceMonzoOrValExponent(primeExponent, {abbreviated}),
        ).join(SPACE) + punctuatedSeparator

        let index = 0
        while (index < two3FreeMonzo.length) {
            const primeExponent = two3FreeMonzo[index]
            const newContent = maybeSpaceMonzoOrValExponent(primeExponent, {abbreviated})
            contents = contents + newContent
            if (index < indexOfFinalElement(two3FreeMonzo)) {
                if (index % 3 === 2) {
                    contents = contents + punctuatedSeparator
                } else {
                    contents = contents + SPACE
                }
            }
            index += 1
        }
    } else {
        contents = monzo.map((primeExponent: Exponent<Prime>): Io =>
            maybeSpaceMonzoOrValExponent(primeExponent, {abbreviated}),
        ).join(SPACE)
    }

    if (abbreviated && punctuated) {
        contents = contents
            .replace(/^0 0/, BLANK)
            .replace(/^0 /, BLANK)
            .replace(/0 0 0/g, BLANK)
    }

    return `[${buffer}${contents}${buffer}⟩` as Formatted<Monzo<T>>
}

export {
    formatMonzo,
}
