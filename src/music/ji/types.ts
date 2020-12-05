import {NumericProperties, Scamon} from "../../math"
import {Cents} from "../types"

type Comma<T extends NumericProperties = {}> = Scamon<T & {rational: true}> & {_CommaBrand: boolean}

type Apotome = Cents & {_ApotomeBrand: boolean}

export {
    Apotome,
    Comma,
}
