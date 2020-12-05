import {computeKeyPath, KeyPath} from "../../../src"
import {computeKeyPathArray} from "../../../src/code/keyPath"

describe("computeKeyPath", (): void => {
    it("computes a various types of key paths from key path args", (): void => {
        expect(computeKeyPath(1)).toEqual(1 as KeyPath)
        expect(computeKeyPath("size")).toEqual("size" as KeyPath)
        expect(computeKeyPath(1, "size")).toEqual({1: "size"} as Record<number, string> as KeyPath)
        expect(computeKeyPath("size", 1)).toEqual({"size": 1} as Record<number, string> as KeyPath)
        expect(computeKeyPath("size", 1, "howdy")).toEqual({"size": {1: "howdy"}} as Record<number, string> as KeyPath)
    })
})

describe("computeKeyPathArray", (): void => {
    it("computes various types of key path arrays from key paths", (): void => {
        expect(computeKeyPathArray(1 as KeyPath)).toEqual([1])
        expect(computeKeyPathArray("size" as KeyPath)).toEqual(["size"])
        expect(computeKeyPathArray({1: "size"} as Record<number, string> as KeyPath)).toEqual([1, "size"])
        expect(computeKeyPathArray({"size": 1} as Record<number, string> as KeyPath)).toEqual(["size", 1])
        expect(computeKeyPathArray({"size": {1: "howdy"}} as Record<number, string> as KeyPath)).toEqual(["size", 1, "howdy"])
    })
})
