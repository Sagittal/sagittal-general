import {NumericProperties, Scamon} from "../../numeric"
import {isRationalMonzoRough} from "../monzo"
import {Primes, Roughness} from "../types"

const isRationalScamonRough = <S extends Primes, T extends NumericProperties>(
    candidateRoughRationalScamon: Scamon<T & {rational: true}>,
    roughness: S & Roughness,
): candidateRoughRationalScamon is Scamon<T & {rational: true, rough: S}> =>
    isRationalMonzoRough(candidateRoughRationalScamon.monzo, roughness)

export {
    isRationalScamonRough,
}
