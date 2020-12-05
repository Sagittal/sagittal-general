import {Range} from "../../code"
import {Table} from "./types"

const computeColumnRange = <T>(table: Table<T>): Range => {
    const exampleRow = table[0]
    const columnCount = exampleRow.length

    return [...Array(columnCount).keys()] as Range
}

export {
    computeColumnRange,
}
