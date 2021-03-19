import {NumericProperties, Spev} from "../../numeric"
import {isRationalPevRough} from "../pev"
import {Primes, Roughness} from "../types"

const isRationalSpevRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalSpev: Spev<T & {rational: true}>,
    roughness: S & Roughness,
): candidateRoughRationalSpev is Spev<T & {rational: true, rough: S}> =>
    isRationalPevRough(candidateRoughRationalSpev.pev, roughness)

export {
    isRationalSpevRough,
}
