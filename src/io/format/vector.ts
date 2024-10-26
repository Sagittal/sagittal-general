import { indexOfFinalElement } from "../../code"
import { mod, NumericProperties, Vector } from "../../math"
import { BLANK, COMMA, SPACE } from "../constants"
import { Io } from "../types"
import { spaceVectorOrMapEntry } from "./spaceVectorOrMapEntry"
import { FormatVectorOrMapOptions, Formatted } from "./types"

const maybeSpaceVectorOrMapEntry = (
    vectorOrMapEntry: number,
    { abbreviated }: { abbreviated: boolean },
): Io => (abbreviated ? vectorOrMapEntry.toString() : spaceVectorOrMapEntry(vectorOrMapEntry))

const formatVector = <T extends NumericProperties>(
    vector: Vector<T>,
    { punctuated = false, abbreviated = false }: FormatVectorOrMapOptions = {},
): Formatted<Vector<T>> => {
    const buffer = abbreviated ? BLANK : SPACE

    let contents
    if (punctuated) {
        const punctuatedSeparator = `${COMMA}${buffer}`

        // Take care of the first 2 elements, which are special
        const two3FreeVector: Vector<T & { rough: 5 }> = vector.splice(2) as Vector<T & { rough: 5 }>
        contents =
            vector
                .map(
                    (vectorOrMapEntry: number): Io =>
                        maybeSpaceVectorOrMapEntry(vectorOrMapEntry, {
                            abbreviated,
                        }),
                )
                .join(SPACE) + punctuatedSeparator

        let index = 0
        while (index < two3FreeVector.length) {
            const vectorOrMapEntry = two3FreeVector[index]
            const newContent = maybeSpaceVectorOrMapEntry(vectorOrMapEntry, {
                abbreviated,
            })
            contents = contents + newContent
            if (index < indexOfFinalElement(two3FreeVector)) {
                if (mod(index, 3) === 2) {
                    contents = contents + punctuatedSeparator
                } else {
                    contents = contents + SPACE
                }
            }
            index += 1
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
