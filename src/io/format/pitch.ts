import { isQuotientRational, isScaledVectorRational, NumericProperties, ScaledVector } from "../../math"
import { computeCentsFromPitch } from "../../music"
import { formatCents } from "./cents"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"
import { formatVector } from "./vector"

const formatPitch = <T extends NumericProperties>(
    pitch: ScaledVector<T>,
    options: { align?: boolean; noLaTeXMultiplier?: boolean } = {},
): Formatted<ScaledVector<T>> => {
    if (isScaledVectorRational(pitch)) {
        return formatVector(pitch.vector) as Formatted as Formatted<ScaledVector<T>>
    } else {
        const { scaler, vector } = pitch
        if (isQuotientRational(scaler)) {
            return `${formatVector(vector)}(${formatQuotient(scaler, options)})` as Formatted<ScaledVector<T>>
        } else {
            return formatCents(computeCentsFromPitch(pitch), options) as Formatted as Formatted<
                ScaledVector<T>
            >
        }
    }
}

export { formatPitch }
