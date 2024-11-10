import { Max, Prime, ScaledVector } from "../../math"
import { Window } from "../../types"
import { Comma } from "./types"

const THREE_PRIME_LIMIT: 3 & Max<Prime> = 3 as 3 & Max<Prime>
const FIVE_PRIME_LIMIT: 5 & Max<Prime> = 5 as 5 & Max<Prime>
const SEVEN_PRIME_LIMIT: 7 & Max<Prime> = 7 as 7 & Max<Prime>

// I wish I could use the EMPTY_VECTOR here but it leads to bundling errors
const UNISON = { vector: [] as unknown[] } as Comma
const OCTAVE = { vector: [1] } as ScaledVector

// This may be of interest: http://forum.sagittal.org/viewtopic.php?p=1723#p1723
/* eslint-disable prettier/prettier */
const PYTHAGOREAN_SCHISMA = { vector: [-84, 53] } as Comma                  // 3s       Mercator's comma          3.615046¢
const SUPERCOMPLEX_PYTHAGOREAN_KLEISMA = { vector: [317, -200] } as Comma   // 3k                                 8.999827¢
const PYTHAGOREAN_COMMA = { vector: [-19, 12] } as Comma                    // 3C       ditonic comma            23.460010¢   531441/524288
const PYTHAGOREAN_LARGE_DIESIS = { vector: [27, -17] } as Comma             // 3L       17-comma                 66.764985¢
const PYTHAGOREAN_LIMMA = { vector: [8, -5] } as Comma                      // 3SS      Pythagorean semitone     90.224996¢      256/243
const APOTOME = { vector: [-11, 7] } as Comma                               // 3A       chromatic semitone      113.685006¢     2187/2048
const THIRTYONE_THREE_COMMA = { vector: [-49, 31] } as Comma                // 3M+A                             160.605027¢
const PYTHAGOREAN_WHOLE_TONE = { vector: [-3, 2] } as Comma                 // 3MS+A                            203.910002¢        9/8
/* eslint-enable prettier/prettier */

const OCTAVE_WINDOW = 2 as Window<{ of: 2 }>

const SCHISMINA = { vector: [12, -2, -1, -1, 0, -1] } as Comma
const SCHISMA = { vector: [-15, 8, 1] } as Comma
const KLEISMA = { vector: [-6, -5, 6] } as Comma
const SYNTONIC_COMMA = { vector: [-4, 4, -1] } as Comma
const SEPTIMAL_KLEISMA = { vector: [-5, 2, 2, -1] } as Comma
const SEPTIMAL_COMMA = { vector: [6, -2, 0, -1] } as Comma

export {
    THREE_PRIME_LIMIT,
    FIVE_PRIME_LIMIT,
    SEVEN_PRIME_LIMIT,
    UNISON,
    PYTHAGOREAN_COMMA,
    PYTHAGOREAN_LIMMA,
    PYTHAGOREAN_SCHISMA,
    SUPERCOMPLEX_PYTHAGOREAN_KLEISMA,
    PYTHAGOREAN_LARGE_DIESIS,
    PYTHAGOREAN_WHOLE_TONE,
    THIRTYONE_THREE_COMMA,
    OCTAVE,
    OCTAVE_WINDOW,
    APOTOME,
    SCHISMA,
    SCHISMINA,
    SEPTIMAL_COMMA,
    SEPTIMAL_KLEISMA,
    SYNTONIC_COMMA,
    KLEISMA,
}
