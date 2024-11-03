import { Decimal } from "../math"
import { Ed, Window } from "../types"

type Parameter = Decimal & { _ParameterBrand: boolean }

type DynamicParameterScope = Partial<{
    center: Parameter
    ed: Ed<{ of: Parameter }>
    window: Window<{ of: Parameter }>
}>

type ParameterScope = Parameter | boolean | DynamicParameterScope

type ParameterScopes<T extends string = string> = Partial<Record<T, ParameterScope>>

// Used to be score, but changed per http://forum.sagittal.org/viewtopic.php?p=2754#p2754?
type Grade<T = undefined> = Decimal & { _GradeBrand: boolean; _GradeOf: T }

export { Parameter, DynamicParameterScope, ParameterScopes, ParameterScope, Grade }
