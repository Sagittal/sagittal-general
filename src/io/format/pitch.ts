import {isQuotientRational, isScamonRational, Scamon} from "../../math"
import {computeCentsFromPitch} from "../../music"
import {formatCents} from "./cents"
import {formatMonzo} from "./monzo"
import {formatQuotient} from "./quotient"
import {Formatted} from "./types"

const formatPitch = (pitch: Scamon, options: {align?: boolean, noLaTeXScaler?: boolean} = {}): Formatted<Scamon> => {
    if (isScamonRational(pitch)) {
        return formatMonzo(pitch.monzo) as Formatted as Formatted<Scamon>
    } else {
        const {scaler, monzo} = pitch
        if (isQuotientRational(scaler)) {
            return `${formatMonzo(monzo)}(${formatQuotient(scaler, options)})` as Formatted<Scamon>
        } else {
            return formatCents(computeCentsFromPitch(pitch), options) as Formatted as Formatted<Scamon>
        }
    }
}

export {
    formatPitch,
}
