import {ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL} from "../constants";

export const throwIfNumberIsTooBigOrTooSmall = (value: number) => {
    if ((value > Number.MAX_SAFE_INTEGER) || (value < Number.MIN_SAFE_INTEGER)) {
        throw new Error(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL);
    }
}
