import {sub} from './sub'

export const subAll = (...values: number[]): number => {
    let total = 0
    for (const value of values) {
        total = sub(total, value)
    }
    return total
}
