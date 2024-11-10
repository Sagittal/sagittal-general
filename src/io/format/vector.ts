import { indexOfFinalElement } from "../../code"
import { Decimal, Integer, mod, NumericProperties, Rough, Vector } from "../../math"
import { BLANK, COMMA, SPACE } from "../constants"
import { stringify } from "../stringify"
import { Io } from "../types"
import { spaceVectorOrMapEntry } from "./spaceVectorOrMapEntry"
import { FormatVectorOrMapOptions, Formatted } from "./types"

const maybeSpaceVectorOrMapEntry = (
    vectorOrMapEntry: number,
    { abbreviated }: { abbreviated: boolean },
): Io => (abbreviated ? stringify(vectorOrMapEntry) : spaceVectorOrMapEntry(vectorOrMapEntry))

const formatVector = <T extends NumericProperties>(
    vector: Vector<T>,
    { punctuated = false, abbreviated = false }: FormatVectorOrMapOptions = {},
): Formatted<Vector<T>> => {
    const buffer = abbreviated ? BLANK : SPACE

    let contents
    if (punctuated) {
        const punctuatedSeparator = `${COMMA}${buffer}`

        // Take care of the first 2 elements, which are special
        const two3FreeVector: Vector<T & Rough<5>> = vector.splice(2) as Vector<T & Rough<5>>
        contents =
            vector
                .map(
                    (vectorOrMapEntry: number): Io =>
                        maybeSpaceVectorOrMapEntry(vectorOrMapEntry, {
                            abbreviated,
                        }),
                )
                .join(SPACE) + punctuatedSeparator

        let index = 0 as Decimal<Integer>
        while (index < two3FreeVector.length) {
            const vectorOrMapEntry = two3FreeVector[index]
            const newContent = maybeSpaceVectorOrMapEntry(vectorOrMapEntry, {
                abbreviated,
            })
            contents = contents + newContent
            if (index < indexOfFinalElement(two3FreeVector)) {
                if (mod(index, 3 as Decimal<Integer>) === 2) {
                    contents = contents + punctuatedSeparator
                } else {
                    contents = contents + SPACE
                }
            }
            index = (index + 1) as Decimal<Integer>
        }
    } else {
        contents = vector
            .map(
                (vectorOrMapEntry: number): Io =>
                    maybeSpaceVectorOrMapEntry(vectorOrMapEntry, {
                        abbreviated,
                    }),
            )
            .join(SPACE)
    }

    if (abbreviated && punctuated) {
        contents = contents.replace(/^0 0/, BLANK).replace(/^0 /, BLANK).replace(/0 0 0/g, BLANK)
    }

    return `[${buffer}${contents}${buffer}⟩` as Formatted<Vector<T>>
}

export { formatVector }
