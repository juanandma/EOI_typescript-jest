import {sum} from './sum'

export const sumAll = (...values: number[]): number => {
    let total = 0
    for (const value of values) {
        total = sum(total, value)
    }
    return total
}
