import {Direction, Pev} from "../../math"
import {Two3FreeClass} from "../ji"

const two3FreeClassFixture: Two3FreeClass = {
    pev: [1, 1] as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
} as Two3FreeClass

export {
    two3FreeClassFixture,
}
