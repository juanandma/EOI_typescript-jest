import {validateParameters} from "../helpers/validateParameters";

export const sub = (a: number, b: number): number => {
    const result = a - b
    validateParameters(a, b, result)
    const roundedResult = Math.round((a - b) * 1000000000000000) / 1000000000000000
    if (a - b < 1) return roundedResult
    return a - b
}
