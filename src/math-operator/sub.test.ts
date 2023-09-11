import {sub} from "./sub"
import {ERROR_NAN, ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL} from "../constants";
import {throwIfNaN} from "../helpers/throwIfNaN";
import {throwIfNumberIsTooBigOrTooSmall} from "../helpers/throwIfNumberIsTooBigOrTooSmall";

const mockThrowIfNaN = throwIfNaN as jest.MockedFunction<typeof throwIfNaN>
const mockThrowIfNumberIsTooBigOrTooSmall = throwIfNumberIsTooBigOrTooSmall as jest.MockedFunction<typeof throwIfNumberIsTooBigOrTooSmall>

jest.mock('../helpers/throwIfNaN', () => ({
    throwIfNaN: jest.fn()
}))

jest.mock('../helpers/throwIfNumberIsTooBigOrTooSmall', () => ({
    throwIfNumberIsTooBigOrTooSmall: jest.fn()
}))

beforeEach(() => {
    mockThrowIfNaN.mockReset()
    mockThrowIfNumberIsTooBigOrTooSmall.mockReset()
})


describe('sub', () => {
    it('should return a NAN_ERROR if any of the parameters is NaN', () => {
        mockThrowIfNaN.mockImplementation(() => {
            throw new Error(ERROR_NAN)
        })

        expect(() => sub(NaN, NaN)).toThrowError(ERROR_NAN)
    })

    it('should return an ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL if one of the parameters is too big or too small', () => {
        mockThrowIfNumberIsTooBigOrTooSmall.mockImplementation(() => {
            throw new Error(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
        })
        const bigNumber = 9007199254740992
        const smallNumber = -9007199254740992

        expect(() => sub(bigNumber, 100)).toThrowError(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
        expect(() => sub(smallNumber, -100)).toThrowError(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
    })

    it('should sub two integers', () => {
        expect(sub(1, 1)).toBe(0)
    })

    it('should sum two small floats', () => {
        expect(sub(-0.1, 0.2)).toBe(-0.3)
    })
})
