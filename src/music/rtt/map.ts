import { formatMap, formatVector } from "../../io"
import { NumericProperties, Vector, Prime } from "../../math"
import { Generator, Map, NumericPropertyTranslationForMappedVector } from "./types"
import { Count } from "../../types"

const mapVector = <VectorT extends NumericProperties = {}, MapT extends NumericProperties = {}>(
    vector: Vector<VectorT>,
    map: Map<MapT>,
): Count<Generator> & NumericPropertyTranslationForMappedVector<VectorT, MapT> => {
    if (map.length < vector.length) {
        throw new Error(
            `Please provide a map with at least the geneartors/primes entries for the primes of the vector it is mapping. This map ${formatMap(
                map,
            )} could not map vector ${formatVector(vector)}.`,
        )
    }

    return vector.reduce(
        (
            generatorCount: Count<Generator>,
            primeCount: Count<Prime>,
            index: number,
        ): Count<Generator> & NumericPropertyTranslationForMappedVector<VectorT, MapT> => {
            return (generatorCount + primeCount * map[index]) as Count<Generator> &
                NumericPropertyTranslationForMappedVector<VectorT, MapT>
        },
        0 as Count<Generator> & NumericPropertyTranslationForMappedVector<VectorT, MapT>,
    )
}

export { mapVector }
