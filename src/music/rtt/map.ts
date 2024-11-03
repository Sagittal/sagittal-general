import { indexOf, isUndefined, ZERO_ONE_INDEX_DIFF } from "../../code"
import {
    computePrimes,
    computeScaledVectorFromDecimal,
    Max,
    NumericProperties,
    Subtrahend,
    Prime,
} from "../../math"
import { Count, Index } from "../../types"
import { computeCentsFromPitch } from "../cents"
import { computeStepSize, Edo } from "../edo"
import { Cents, Error } from "../types"
import { EtName, EtStep, Map, Per, Wart } from "./types"

const CHAR_CODE_OFFSET: Subtrahend<Index> = 96 as Subtrahend<Index>

const computeStepOffset = ({
    wartCount,
    wideCandidateError,
    narrowCandidateError,
}: {
    wartCount: Count<Wart>
    wideCandidateError: Error
    narrowCandidateError: Error
}) => {
    //   wide closer:  0, -1,  1, -2,  2, ...
    // narrow Closer: -1,  0, -2,  1, -3, ...

    let stepOffset = 0
    for (let i = 0; i < wartCount; i++) {
        stepOffset = -(stepOffset >= 0 ? stepOffset + 1 : stepOffset)
    }

    return wideCandidateError > narrowCandidateError ? -(stepOffset + 1) : stepOffset
}

const computeStepCount = (
    prime: Prime,
    stepSize: Cents,
    wartCount: Count<Wart>,
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

    const wideCandidateError: Error = (currentBestApproximationCandidate - jiPrimeSize) as Error
    const narrowCandidateError: Error = (jiPrimeSize - previousBestApproximationCandidate) as Error

    const stepOffset = computeStepOffset({ wideCandidateError, narrowCandidateError, wartCount })

    return (currentStep + stepOffset) as Per<Count<EtStep>, Prime>
}

const computeWartCountsByPrimeIndex = (warts: Wart[]): Record<Index<Prime>, Count<Wart>> =>
    warts.reduce(
        (
            wartCountsByPrimeIndex: Record<Index<Prime>, Count<Wart>>,
            wart: Wart,
        ): Record<Index<Prime>, Count<Wart>> => {
            const primeIndex: Index<Prime> = (wart.charCodeAt(0) -
                CHAR_CODE_OFFSET -
                ZERO_ONE_INDEX_DIFF) as Index<Prime>
            if (isUndefined(wartCountsByPrimeIndex[primeIndex])) {
                wartCountsByPrimeIndex[primeIndex] = 1 as Count<Wart>
            } else {
                wartCountsByPrimeIndex[primeIndex]++
            }
            return wartCountsByPrimeIndex
        },
        {} as Record<Index<Prime>, Count<Wart>>,
    )

const computePrimeLimitPrimes = (primeLimit: Max<Prime>): Prime[] => {
    const allPrimes: Prime[] = computePrimes(primeLimit)
    const maxPrimeIndex: Index<Prime> = indexOf(allPrimes, primeLimit)

    return allPrimes.slice(0, maxPrimeIndex + ZERO_ONE_INDEX_DIFF)
}

const computeEdoAndWarts = (edoOrEtName: Edo | EtName): { edo: Edo; warts: Wart[] } =>
    typeof edoOrEtName === "number"
        ? {
              edo: edoOrEtName,
              warts: [],
          }
        : {
              edo: parseInt(edoOrEtName.match(/\d*/)![0]) as Edo,
              warts: Array.from(edoOrEtName.match(/[a-z]/g) || []) as Wart[],
          }

const computeMap = <T extends NumericProperties>(
    edoOrEtName: Edo | EtName,
    primeLimit: Max<Prime>,
): Map<T> => {
    const { edo, warts } = computeEdoAndWarts(edoOrEtName)

    const wartCountsByPrimeIndex: Record<Index<Prime>, Count<Wart>> = computeWartCountsByPrimeIndex(warts)
    const stepSize: Cents = computeStepSize(edo)
    const primes: Prime[] = computePrimeLimitPrimes(primeLimit)

    return primes.map(
        (prime: Prime, primeIndex: number): Per<Count<EtStep>, Prime> =>
            computeStepCount(prime, stepSize, wartCountsByPrimeIndex[primeIndex as Index<Prime>]),
    ) as Map<T>
}

export { computeMap }
