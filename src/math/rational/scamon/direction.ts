import {Direction, isMonzoSub, isMonzoSuper, isMonzoUnison, NumericProperties, Scamon} from "../../numeric"

const isRationalScamonSuper = <T extends NumericProperties>(
    candidateSuperRationalScamon: Scamon<T & {rational: true}>,
): candidateSuperRationalScamon is (Scamon<T & {rational: true} & {direction: Direction.SUPER}>) =>
    isMonzoSuper(candidateSuperRationalScamon.monzo)

const isRationalScamonSub = <T extends NumericProperties>(
    candidateSubRationalScamon: Scamon<T & {rational: true}>,
): candidateSubRationalScamon is Scamon<T & {rational: true, direction: Direction.SUB}> =>
    isMonzoSub(candidateSubRationalScamon.monzo)

// This is actually not that silly, because irrational scamons can be unison via a scaler with a 0 numerator while their
// Monzos are not unison.
const isRationalScamonUnison = <T extends NumericProperties>(
    candidateUnisonRationalScamon: Scamon<T & {rational: true}>,
): candidateUnisonRationalScamon is Scamon<T & {rational: true, direction: Direction.UNISON}> =>
    isMonzoUnison(candidateUnisonRationalScamon.monzo)

export {
    isRationalScamonSuper,
    isRationalScamonSub,
    isRationalScamonUnison,
}
