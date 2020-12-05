import {Combination, computePossibilities, Ed, Parameter, ParameterScopes, Window} from "../../../src"

describe("computePossibilities", (): void => {
    it("given a scope (centers, windows, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", (): void => {
        const submetricScope = {
            aAsCoefficient: {
                center: 1 as Parameter,
                window: 0.5 as Window<{of: Parameter}>,
                ed: 5 as Ed<{of: Parameter}>,
            },
            w: {
                center: 0.7 as Parameter,
                window: 0.2 as Window<{of: Parameter}>,
                ed: 3 as Ed<{of: Parameter}>,
            },
        } as ParameterScopes

        const actual = computePossibilities(submetricScope)

        const expected = [
            {aAsCoefficient: 0.75, w: 0.6} as ParameterScopes,
            {aAsCoefficient: 0.875, w: 0.6} as ParameterScopes,
            {aAsCoefficient: 1.0, w: 0.6} as ParameterScopes,
            {aAsCoefficient: 1.125, w: 0.6} as ParameterScopes,
            {aAsCoefficient: 1.25, w: 0.6} as ParameterScopes,
            {aAsCoefficient: 0.75, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 0.875, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 1.0, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 1.125, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 1.25, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 0.75, w: 0.8} as ParameterScopes,
            {aAsCoefficient: 0.875, w: 0.8} as ParameterScopes,
            {aAsCoefficient: 1.0, w: 0.8} as ParameterScopes,
            {aAsCoefficient: 1.125, w: 0.8} as ParameterScopes,
            {aAsCoefficient: 1.25, w: 0.8} as ParameterScopes,
        ] as Combination<ParameterScopes>
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    it("leaves a parameter out if it has a 0 ED", (): void => {
        const submetricScope = {
            aAsCoefficient: {
                center: 1 as Parameter,
                window: 0.5 as Window<{of: Parameter}>,
                ed: 5 as Ed<{of: Parameter}>,
            },
            w: {
                center: 0.7 as Parameter,
                window: 0.2 as Window<{of: Parameter}>,
                ed: 0 as Ed<{of: Parameter}>,
            },
        } as ParameterScopes

        const actual = computePossibilities(submetricScope)

        const expected = [
            {aAsCoefficient: 0.75} as ParameterScopes,
            {aAsCoefficient: 0.875} as ParameterScopes,
            {aAsCoefficient: 1.0} as ParameterScopes,
            {aAsCoefficient: 1.125} as ParameterScopes,
            {aAsCoefficient: 1.25} as ParameterScopes,
        ] as Combination<ParameterScopes>
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    it("works when provided a flat value", (): void => {
        const submetricScopes = {
            aAsCoefficient: {
                center: 1 as Parameter,
                window: 0.5 as Window<{of: Parameter}>,
                ed: 5 as Ed<{of: Parameter}>,
            },
            w: 0.7 as Parameter,
        } as ParameterScopes

        const actual = computePossibilities(submetricScopes)

        const expected = [
            {aAsCoefficient: 0.75, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 0.875, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 1.0, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 1.125, w: 0.7} as ParameterScopes,
            {aAsCoefficient: 1.25, w: 0.7} as ParameterScopes,
        ] as Combination<ParameterScopes>
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })
})
