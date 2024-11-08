import { formatMap, formatVector } from "../../io"
import { NumericProperties, Vector, PrimeCount } from "../../math"
import { Map, StepCount } from "./types"

const mapVector = <VectorT extends NumericProperties, MapT extends NumericProperties>(
    vector: Vector<VectorT>,
    map: Map<MapT>,
): StepCount<VectorT, MapT> => {
    if (map.length < vector.length) {
        throw new Error(
            `Please provide a map with at least the geneartors/primes entries for the primes of the vector it is mapping. This map ${formatMap(
                map,
            )} could not map vector ${formatVector(vector)}.`,
        )
    }

    return vector.reduce(
        (
            generatorCount: StepCount<VectorT, MapT>,
            primeCount: PrimeCount<VectorT>,
            index: number,
        ): StepCount<VectorT, MapT> => {
            return (generatorCount + primeCount * map[index]) as StepCount<VectorT, MapT>
        },
        0 as StepCount<VectorT, MapT>,
    )
}

export { mapVector }
