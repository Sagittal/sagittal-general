import {NumericProperties, Spev} from "../../math"
import {Cents} from "../types"

type Comma<T extends NumericProperties = {}> = Spev<T & {rational: true}> & {_CommaBrand: boolean}

type Apotome = Cents & {_ApotomeBrand: boolean}

export {
    Apotome,
    Comma,
}
