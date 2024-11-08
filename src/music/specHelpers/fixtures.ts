import { Rational, Rough, Super, Vector } from "../../math"
import { Two3FreeClass } from "../ji"

const two3FreeClassFixture: Two3FreeClass = {
    vector: [1, 1] as Vector<Rational & Super & Rough<5>>,
} as Two3FreeClass

export { two3FreeClassFixture }
