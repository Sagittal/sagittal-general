import {CaseDesensitized} from "./types"

const caseDesensitize = <T extends string>(code: T): T & CaseDesensitized =>
    code.toLowerCase() as T & CaseDesensitized

export {
    caseDesensitize,
}
