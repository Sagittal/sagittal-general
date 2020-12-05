import {floor} from "../math"
import {indexOfFinalElement} from "./finalElement"

const shuffle = <T>(array: T[]): void => {
    for (let i = indexOfFinalElement(array); i > 0; i--) {
        const j = floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

export {
    shuffle,
}
