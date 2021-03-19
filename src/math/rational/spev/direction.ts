import {Direction, isPevSub, isPevSuper, isPevUnison, NumericProperties, Spev} from "../../numeric"

const isRationalSpevSuper = <T extends NumericProperties>(
    candidateSuperRationalSpev: Spev<T & {rational: true}>,
): candidateSuperRationalSpev is (Spev<T & {rational: true} & {direction: Direction.SUPER}>) =>
    isPevSuper(candidateSuperRationalSpev.pev)

const isRationalSpevSub = <T extends NumericProperties>(
    candidateSubRationalSpev: Spev<T & {rational: true}>,
): candidateSubRationalSpev is Spev<T & {rational: true, direction: Direction.SUB}> =>
    isPevSub(candidateSubRationalSpev.pev)

// This is actually not that silly, because irrational spevs can be unison via a scaler with a 0 numerator while their
// Pevs are not unison.
const isRationalSpevUnison = <T extends NumericProperties>(
    candidateUnisonRationalSpev: Spev<T & {rational: true}>,
): candidateUnisonRationalSpev is Spev<T & {rational: true, direction: Direction.UNISON}> =>
    isPevUnison(candidateUnisonRationalSpev.pev)

export {
    isRationalSpevSuper,
    isRationalSpevSub,
    isRationalSpevUnison,
}
