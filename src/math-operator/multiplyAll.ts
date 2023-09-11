import {multiply} from './multiply'

export const multiplyAll = (...values: number[]): number => {
    let total = 0
    for (const value of values) {
        total = multiply(total, value)
    }
    return total
}
