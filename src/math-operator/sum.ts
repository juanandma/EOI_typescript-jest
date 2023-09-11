import {validateParameters} from "../helpers/validateParameters";

export const sum = (a: number, b: number): number => {
    const result = a + b
    validateParameters(a, b, result)
    const roundedResult = Math.round(result * 1000000000000000) / 1000000000000000
    if (result < 1) return roundedResult
    return result
}
