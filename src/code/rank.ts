import {Decimal} from "../math"
import {Count} from "../types"
import {deepClone} from "./clone"
import {DEFAULT_PRECISION} from "./constants"
import {increment} from "./crement"
import {dig} from "./dig"
import {isCloseTo} from "./isCloseTo"
import {computeKeyPath} from "./keyPath"
import {sort} from "./sort"
import {isArray, isNumber, isUndefined} from "./typeGuards"
import {Obj, Precision, Rank, RankOptions, RankStrategy} from "./types"

const isCloseOrEqual = (a: unknown, b: unknown, precision: Precision = DEFAULT_PRECISION): boolean => {
    if (isUndefined(precision) || !isNumber(a) || !isNumber(b)) {
        return a === b
    } else {
        return isCloseTo(a, b, precision)
    }
}

const rank = <T>(arrayOfObjects: T[], options: RankOptions = {}): Array<T & {rank: Rank<T>}> => {
    const {by = computeKeyPath("value"), strategy = RankStrategy.COMPETITION, descending, precision} = options

    const clonedArrayOfObjects = deepClone(arrayOfObjects)
    sort(clonedArrayOfObjects, {by, descending, precision})

    let rank = 0 as Rank<T>
    let tiesCount = 0 as Count
    let previousValue: unknown

    if (isArray(by)) throw new Error("Ranking by multiple properties is not yet supported")

    switch (strategy) {
        case RankStrategy.FRACTIONAL:
            return clonedArrayOfObjects.map((object: T, index: number): T & {rank: Rank<T>} => {
                if ((object as T & {rank: Rank<T>}).rank) {
                    return object as T & {rank: Rank<T>}
                }

                tiesCount = 0 as Count
                clonedArrayOfObjects.slice(index + 1).forEach((objectWithWorseOrTiedRank: T): void => {
                    if (isCloseOrEqual(dig(objectWithWorseOrTiedRank as Obj, by), dig(object as Obj, by), precision)) {
                        tiesCount = tiesCount + 1 as Count
                    }
                })

                if (tiesCount === 0) {
                    return {...object, rank: index + 1} as T & {rank: Rank<T>}
                } else {
                    const rank: Rank<T> = (index + 1) + tiesCount / 2 as Rank<T>

                    for (let i = index; i < index + tiesCount; i++) {
                        (clonedArrayOfObjects[i + 1] as T & {rank: Rank<T>}).rank = rank as Rank<T>
                    }

                    return {...object, rank} as T & {rank: Rank<T>}
                }
            })
        case RankStrategy.COMPETITION:
            return clonedArrayOfObjects.map((object: T): T & {rank: Decimal<{integer: true}> & Rank<T>} => {
                const rankingValue = dig(object as Obj, by)
                if (isCloseOrEqual(rankingValue, previousValue, precision)) {
                    tiesCount = increment(tiesCount)

                    return {...object, rank: rank as Decimal<{integer: true}> & Rank<T>}
                } else {
                    rank = rank + 1 + tiesCount as Decimal<{integer: true}> & Rank<T>
                    tiesCount = 0 as Count
                    previousValue = rankingValue

                    return {...object, rank: rank as Decimal<{integer: true}> & Rank<T>}
                }
            })
        case RankStrategy.DENSE:
            return clonedArrayOfObjects.map((object: T): T & {rank: Decimal<{integer: true}> & Rank<T>} => {
                const rankingValue = dig(object as Obj, by)
                if (isCloseOrEqual(rankingValue, previousValue, precision)) {
                    return {...object, rank: rank as Decimal<{integer: true}> & Rank<T>}
                } else {
                    rank = increment(rank)
                    previousValue = rankingValue

                    return {...object, rank: rank as Decimal<{integer: true}> & Rank<T>}
                }
            })
        case RankStrategy.ORDINAL:
            return clonedArrayOfObjects.map((
                object: T,
                index: number,
            ): T & {rank: Decimal<{integer: true}> & Rank<T>} => {
                return {...object, rank: index + 1 as Decimal<{integer: true}> & Rank<T>}
            })
        default:
            throw new Error(`unknown rank strategy ${strategy}`)
    }
}

export {
    rank,
}
