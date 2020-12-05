import {NumericProperties, Scamon} from "../../numeric"
import {Max} from "../../types"
import {computeRationalMonzoSmoothness, isRationalMonzoSmooth} from "../monzo"
import {Prime, Primes, Smoothness} from "../types"

const isRationalScamonSmooth = <S extends Primes, T extends NumericProperties>(
    candidateSmoothRationalScamon: Scamon<T & {rational: true}>,
    smoothness: S & Smoothness,
): candidateSmoothRationalScamon is Scamon<T & {rational: true, smooth: S}> =>
    isRationalMonzoSmooth(candidateSmoothRationalScamon.monzo, smoothness)

const computeRationalScamonSmoothness = <T extends NumericProperties>(
    {monzo}: Scamon<T & {rational: true}>,
): Smoothness & Max<Prime<T>> =>
    computeRationalMonzoSmoothness(monzo) as Smoothness & Max<Prime<T>>

export {
    isRationalScamonSmooth,
    computeRationalScamonSmoothness,
}
