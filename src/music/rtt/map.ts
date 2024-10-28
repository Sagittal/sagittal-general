// TODO: clean this up w/r/t computeSimpleMap
// as a special case of making a warted map, or something
// map from ET name or something

import { indexOf, ZERO_ONE_INDEX_DIFF } from "../../code"
import { computePrimes, computeScaledVectorFromDecimal, Max, Prime } from "../../math"
import { Count, Index } from "../../types"
import { computeCentsFromPitch } from "../cents"
import { computeStepSize, Edo } from "../edo"
import { Cents } from "../types"
import { EtName, EtStep, Map, Per } from "./types"

const WART_ALPHABET: string = "abcdefghijklmno"

const computeStepCount = (
    prime: Prime,
    stepSize: Cents,
    isPrimeWarted: boolean,
): Per<Count<EtStep>, Prime> => {
    const jiPrimeSize = computeCentsFromPitch(computeScaledVectorFromDecimal(prime))

    let currentBestApproximationCandidate: Cents = 0 as Cents
    let previousBestApproximationCandidate: Cents = 0 as Cents
    let currentStep: Per<Count<EtStep>, Prime> = 0 as Per<Count<EtStep>, Prime>
    while (currentBestApproximationCandidate < jiPrimeSize) {
        currentStep++
        previousBestApproximationCandidate = currentBestApproximationCandidate
        currentBestApproximationCandidate = (stepSize * currentStep) as Cents
    }

    const wideCandidateError: Cents = (currentBestApproximationCandidate - jiPrimeSize) as Cents
    const narrowCandidateError: Cents = (jiPrimeSize - previousBestApproximationCandidate) as Cents

    return wideCandidateError < narrowCandidateError
        ? isPrimeWarted
            ? ((currentStep - 1) as Per<Count<EtStep>, Prime>)
            : (currentStep as Per<Count<EtStep>, Prime>)
        : isPrimeWarted
        ? (currentStep as Per<Count<EtStep>, Prime>)
        : ((currentStep - 1) as Per<Count<EtStep>, Prime>)
}

const computeMap = (etName: EtName, primeLimit: Max<Prime>): Map => {
    const edo: Edo = parseInt(etName.match(/\d*/)![0]) as Edo
    const wartedPrimeIndices: Index<Prime>[] = Array.from(etName.match(/[a-z]/g) || []).map(
        (wart: string): Index<Prime> => WART_ALPHABET.indexOf(wart) as Index<Prime>,
    )

    const stepSize: Cents = computeStepSize(edo)

    const allPrimes: Prime[] = computePrimes(primeLimit)
    const maxPrimeIndex: Index<Prime> = indexOf(allPrimes, primeLimit)
    const primes: Prime[] = allPrimes.slice(0, maxPrimeIndex + ZERO_ONE_INDEX_DIFF)

    return primes.map((prime: Prime, primeIndex: number): Per<Count<EtStep>, Prime> => {
        return computeStepCount(prime, stepSize, wartedPrimeIndices.includes(primeIndex as Index<Prime>))
    })
}

export { computeMap }
