import {Precision} from "./types"

const DEFAULT_PRECISION = 5 as Precision
const MAX_JS_PRECISION = 15 as Precision

const ARRAY_EXTENSION_BASE: unknown[] = []
const OBJECT_EXTENSION_BASE: Object = {}

const ZERO_ONE_INDEX_DIFF = 1

const MAX_JS_INTEGER_VALUE = 9007199254740991
// JS min value before giving up and just returning 0 is 5e-324.
// As you approach it, its ability to include full precision slowly erodes.
// It kind of makes sense that it's about 15 decimal places off from 324.
const MIN_JS_VALUE_PRESERVING_PRECISION = 3.82295e-308
// For whatever reason, we don't have the same problem going up.
// You step over this point, and suddenly it gives up and just starts returning Infinity.
// So strictly speaking it's not necessary to check if you're greater than this.
// You could just check if you get Infinity. But I thought it was valuable to include it for parallelism.
// This one is exact, since it's a well-known value I found described online.
// The other one isn't exact because it's less likely anyone would care about the exact point one loses precision.
// And I gave up on tediously trying to pin it down myself.
const MAX_JS_VALUE_PRESERVING_PRECISION = 1.7976931348623157e+308

const NOT_FOUND = -1

export {
    ARRAY_EXTENSION_BASE,
    OBJECT_EXTENSION_BASE,
    DEFAULT_PRECISION,
    ZERO_ONE_INDEX_DIFF,
    MAX_JS_INTEGER_VALUE,
    MAX_JS_PRECISION,
    NOT_FOUND,
    MIN_JS_VALUE_PRESERVING_PRECISION,
    MAX_JS_VALUE_PRESERVING_PRECISION,
}
