import {Count} from "../types"

const computeLineCount = (text: string): Count<string> => {
    const matches = text.match(/\n/g)

    return (matches || []).length + 1 as Count<string>
}

export {
    computeLineCount,
}
