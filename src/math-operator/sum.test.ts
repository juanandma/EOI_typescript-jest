import {sum} from "./sum"
import {ERROR_NAN, ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL} from "../constants";
import {throwIfNaN} from "../helpers/throwIfNaN";
import {throwIfNumberIsTooBigOrTooSmall} from "../helpers/throwIfNumberIsTooBigOrTooSmall";
import mocked = jest.mocked;

jest.mock('../helpers/throwIfNaN', () => ({
    throwIfNaN: jest.fn()
}))

jest.mock('../helpers/throwIfNumberIsTooBigOrTooSmall', () => ({
    throwIfNumberIsTooBigOrTooSmall: jest.fn()
}))

beforeEach(() => {
    mocked(throwIfNaN).mockReset()
    mocked(throwIfNumberIsTooBigOrTooSmall).mockReset()
})

describe('sum', () => {
    it('should return a NaN_ERROR if any of the parameters is NaN', () => {
        mocked(throwIfNaN).mockImplementation(() => {
            throw new Error(ERROR_NAN)
        })

        expect(() => sum(NaN, NaN)).toThrowError(ERROR_NAN)
    })

    it('should return an ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL if the result is too big or too small', () => {
        mocked(throwIfNumberIsTooBigOrTooSmall).mockImplementation(() => {
            throw new Error(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
        })
        const bigNumber = 9007199254740992
        const smallNumber = -9007199254740992

        expect(() => sum(bigNumber, 100)).toThrowError(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
        expect(() => sum(smallNumber, -100)).toThrowError(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
    })

    it('should sum two integers', () => {
        expect(sum(1, 1)).toBe(2)
    })

    it('should sum two small floats', () => {
        expect(sum(0.1, 0.2)).toBe(0.3)
    })
})
