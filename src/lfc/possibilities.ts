import {computeExtensionBase, ExtensionBaseType, isEmpty, isObject} from "../code"
import {Combination} from "../math"
import {computeParameterValues} from "./parameterValues"
import {DynamicParameterScope, Parameter, ParameterScopes} from "./types"

const computePossibilities = <T extends string>(scope: ParameterScopes<T>): Combination<ParameterScopes<T>> => {
    let possibilities: Combination<ParameterScopes<T>> = [computeExtensionBase(ExtensionBaseType.OBJECT)] as
        Combination<ParameterScopes<T>>

    const scopeEntries = Object.entries(scope) as Array<[T, DynamicParameterScope]>

    scopeEntries.forEach(([parameter, parameterScope]: [string, DynamicParameterScope]): void => {
        const extendedPossibilities: Combination<ParameterScopes<T>> =
            [] as unknown[] as Combination<ParameterScopes<T>>

        let values: Parameter[]
        if (!isObject(parameterScope)) {
            values = [parameterScope]
        } else {
            values = computeParameterValues(parameterScope)
        }
        if (isEmpty(values)) {
            return
        }

        possibilities.forEach((possibility: ParameterScopes<T>): void => {
            values.forEach((value: Parameter): void => {
                extendedPossibilities.push({...possibility, [parameter]: value})
            })
        })

        possibilities = extendedPossibilities
    })

    return possibilities
}

export {
    computePossibilities,
}
