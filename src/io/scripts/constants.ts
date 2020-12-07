import {Io} from "../types"

const BOM = "\ufeff" as Io
// Becomes ï»¿ in UTF-8; Node takes care of it based on the "encoding" property

export {
    BOM,
}
