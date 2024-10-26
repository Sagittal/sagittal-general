import { isQuotientRational, isScaledVectorRational, ScaledVector } from "../../math"
import { computeCentsFromPitch } from "../../music"
import { formatCents } from "./cents"
import { formatVector } from "./vector"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

const formatPitch = (
    pitch: ScaledVector,
    options: { align?: boolean; noLaTeXScaler?: boolean } = {},
): Formatted<ScaledVector> => {
    if (isScaledVectorRational(pitch)) {
        return formatVector(pitch.vector) as Formatted as Formatted<ScaledVector>
    } else {
        const { scaler, vector } = pitch
        if (isQuotientRational(scaler)) {
            return `${formatVector(vector)}(${formatQuotient(scaler, options)})` as Formatted<ScaledVector>
        } else {
            return formatCents(
                computeCentsFromPitch(pitch),
                options,
            ) as Formatted as Formatted<ScaledVector>
        }
    }
}

export { formatPitch }
