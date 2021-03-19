import {NumericProperties, NumericPropertyEffects, Pev, Quotient} from "../../../math"
import {Degree} from "../../../types"

type Spev<T extends NumericProperties = {}> =
    {
        pev: Pev<T & {rational: true}>,
        scaler: never,
    } & NumericPropertyEffects<T & {rational: true}>
    | {
    pev: Pev<T & {rational: true}>,
    scaler: Quotient | Degree,
} & NumericPropertyEffects<T & {rational: false}>

export {
    Spev,
}
