import { indexOfFinalElement } from "../../code"
import { Exponent, mod, NumericProperties, Pev, Prime } from "../../math"
import { BLANK, COMMA, SPACE } from "../constants"
import { Io } from "../types"
import { spacePevOrMapEntry } from "./spacePevOrMapEntry"
import { FormatPevOrMapOptions, Formatted } from "./types"

const maybeSpacePevOrMapEntry = (
    pevOrMapEntry: number,
    { abbreviated }: { abbreviated: boolean },
): Io =>
    abbreviated ? pevOrMapEntry.toString() : spacePevOrMapEntry(pevOrMapEntry)

const formatPev = <T extends NumericProperties>(
    pev: Pev<T>,
    { punctuated = false, abbreviated = false }: FormatPevOrMapOptions = {},
): Formatted<Pev<T>> => {
    const buffer = abbreviated ? BLANK : SPACE

    let contents
    if (punctuated) {
        const punctuatedSeparator = `${COMMA}${buffer}`

        // Take care of the first 2 elements, which are special
        const two3FreePev: Pev<T & { rough: 5 }> = pev.splice(2) as Pev<
            T & { rough: 5 }
        >
        contents =
            pev
                .map(
                    (pevOrMapEntry: number): Io =>
                        maybeSpacePevOrMapEntry(pevOrMapEntry, {
                            abbreviated,
                        }),
                )
                .join(SPACE) + punctuatedSeparator

        let index = 0
        while (index < two3FreePev.length) {
            const pevOrMapEntry = two3FreePev[index]
            const newContent = maybeSpacePevOrMapEntry(pevOrMapEntry, {
                abbreviated,
            })
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
        contents = pev
            .map(
                (pevOrMapEntry: number): Io =>
                    maybeSpacePevOrMapEntry(pevOrMapEntry, {
                        abbreviated,
                    }),
            )
            .join(SPACE)
    }

    if (abbreviated && punctuated) {
        contents = contents
            .replace(/^0 0/, BLANK)
            .replace(/^0 /, BLANK)
            .replace(/0 0 0/g, BLANK)
    }

    return `[${buffer}${contents}${buffer}⟩` as Formatted<Pev<T>>
}

export { formatPev }
