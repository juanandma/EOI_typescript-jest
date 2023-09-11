import {div} from './div'

export const divAll = (...values: number[]): number => {
    let total = 0
    for (const value of values) {
        total = div(total, value)
    }
    return total
}
