import {ERROR_NAN} from "../constants";

export const throwIfNaN = (value: number): void => {
    if (isNaN(value)) throw new Error(ERROR_NAN)
}
