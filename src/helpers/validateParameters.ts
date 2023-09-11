import {throwIfNaN} from "./throwIfNaN";
import {throwIfNumberIsTooBigOrTooSmall} from "./throwIfNumberIsTooBigOrTooSmall";

export const validateParameters = (...values: number[]): void => {
    for (const value of values) {
        throwIfNaN(value)
        throwIfNumberIsTooBigOrTooSmall(value)
    }
}
