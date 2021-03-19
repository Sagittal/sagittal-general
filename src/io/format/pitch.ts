import {isQuotientRational, isSpevRational, Spev} from "../../math"
import {computeCentsFromPitch} from "../../music"
import {formatCents} from "./cents"
import {formatPev} from "./pev"
import {formatQuotient} from "./quotient"
import {Formatted} from "./types"

const formatPitch = (pitch: Spev, options: {align?: boolean, noLaTeXScaler?: boolean} = {}): Formatted<Spev> => {
    if (isSpevRational(pitch)) {
        return formatPev(pitch.pev) as Formatted as Formatted<Spev>
    } else {
        const {scaler, pev} = pitch
        if (isQuotientRational(scaler)) {
            return `${formatPev(pev)}(${formatQuotient(scaler, options)})` as Formatted<Spev>
        } else {
            return formatCents(computeCentsFromPitch(pitch), options) as Formatted as Formatted<Spev>
        }
    }
}

export {
    formatPitch,
}
