import {Decimal} from "../../math"
import {Io} from "../types"

const parseDecimal = (decimalIo: Io): Decimal =>
    parseFloat(decimalIo) as Decimal

const parseInteger = (integerIo: Io): Decimal<{integer: true}> =>
    parseInt(integerIo) as Decimal<{integer: true}>

export {
    parseDecimal,
    parseInteger,
}
