import {NumericProperties, Spev} from "../../numeric"
import {Max} from "../../types"
import {computeRationalPevSmoothness, isRationalPevSmooth} from "../pev"
import {Prime, Primes, Smoothness} from "../types"

const isRationalSpevSmooth = <S extends Primes, T extends NumericProperties>(
    candidateSmoothRationalSpev: Spev<T & {rational: true}>,
    smoothness: S & Smoothness,
): candidateSmoothRationalSpev is Spev<T & {rational: true, smooth: S}> =>
    isRationalPevSmooth(candidateSmoothRationalSpev.pev, smoothness)

const computeRationalSpevSmoothness = <T extends NumericProperties>(
    {pev}: Spev<T & {rational: true}>,
): Smoothness & Max<Prime<T>> =>
    computeRationalPevSmoothness(pev) as Smoothness & Max<Prime<T>>

export {
    isRationalSpevSmooth,
    computeRationalSpevSmoothness,
}
