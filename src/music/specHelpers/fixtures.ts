import {Direction, Monzo} from "../../math"
import {Two3FreeClass} from "../ji"

const two3FreeClassFixture: Two3FreeClass = {
    monzo: [1, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
} as Two3FreeClass

export {
    two3FreeClassFixture,
}
