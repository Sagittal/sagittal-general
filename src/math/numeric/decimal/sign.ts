import { AnySign, NumericProperties } from "../types"
import { Decimal } from "./types"

const negate = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & AnySign> =>
    -(decimal as number) as Decimal<T & AnySign>

export { negate }
