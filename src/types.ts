import {Maybe} from "./code"
import {Io} from "./io"
import {Decimal, Max, Min, NumericProperties, Quotient} from "./math"

type Index<T = void> =
    Decimal<{integer: true}> & {_IndexBrand: boolean} & (T extends void ? {} : {_IndexOfBrand: T})
type Count<T = void> =
    Decimal<{integer: true}> & {_CountBrand: boolean} & (T extends void ? {} : {_CountOfBrand: T})
type Offset<T = void> =
    Decimal<{integer: true}> & {_OffsetBrand: boolean} & (T extends void ? {} : {_OffsetOfBrand: T})

type Step<T extends NumericProperties & {of?: number} = {}> =                         // Iteration?
    Decimal<T>
    & {_StepBrand: boolean}
    & (T extends {of: number} ? {_StepOfEdBrand: T["of"]} : {})
type Ed<T extends NumericProperties & {of?: number} = {}> =                           // Generator?
    Decimal<T & {integer: true}>
    & {_EdBrand: boolean}
    & (T extends {of: number} ? {_EdOfWindowBrand: T["of"]} : {})
type Window<T extends NumericProperties & {of?: number} = {}> =                       // Period?
    Decimal<T>
    & {_WindowBrand: boolean}
    & (T extends {of: number} ? {_OfSizeBrand: T["of"]} : {})
type Degree = [Step<any>, Ed<any>] & Quotient

type Name<T = void> = Io & {_NameBrand: boolean} & (T extends void ? {} : {_NameOfBrand: T})

type Extrema<T extends {of?: unknown, open?: boolean} = {of: number, open: false}> = T extends {open: true} ?
    [Maybe<Min<T["of"]>>, Maybe<Max<T["of"]>>] :
    [Min<T["of"]>, Max<T["of"]>]

type Ms = number & {_MsBrand: boolean}

type Of<T> = {_OfBrand: T}

export {
    Index,
    Count,
    Window,
    Step,
    Ed,
    Name,
    Extrema,
    Ms,
    Of,
    Degree,
    Offset,
}
