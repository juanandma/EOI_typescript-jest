import {div} from "./div"
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

describe('div', () => {
    it('should return a NAN_ERROR if any of the parameters is NaN', () => {
        mockThrowIfNaN.mockImplementation(() => {
            throw new Error(ERROR_NAN)
        })

        expect(() => div(NaN, NaN)).toThrowError(ERROR_NAN)
    })

    it('should return an ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL if one of the parameters is too big or too small', () => {
        mockThrowIfNumberIsTooBigOrTooSmall.mockImplementation(() => {
            throw new Error(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
        })
        const bigNumber = 9007199254740992
        const smallNumber = -9007199254740992

        expect(() => div(bigNumber, 100)).toThrowError(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
        expect(() => div(smallNumber, -100)).toThrowError(ERROR_NUMBER_IS_TOO_BIG_OR_TOO_SMALL)
    })

    it('should divide two integers', () => {
        expect(div(4, 2)).toBe(2)
    })

    it('should divide two small floats', () => {
        expect(div(0.01, 0.2)).toBe(0.05)
    })

    it('should return 0 if we divide 0 by any number', () => {
        expect(div(0, 2)).toBe(0)
    })

    it('should return Infinity if we divide any number by 0', () => {
        expect(div(2, 0)).toBe(Infinity)
    })

    it('should return -Infinity if we divide any number by 0', () => {
        expect(div(-2, 0)).toBe(-Infinity)
    })
})
