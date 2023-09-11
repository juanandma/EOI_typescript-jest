import {sumAll} from "./sumAll";
import {sum} from "./sum";
import {ERROR_NAN} from "../constants";
import mocked = jest.mocked;

jest.mock('./sum', () => ({
    sum: jest.fn()
}))

describe("sumAll", () => {
    it('should call "sum" 0 times if no parameters are passed', () => {
        sumAll()
        expect(sum).not.toHaveBeenCalled()
    })
    it('should call "sum" 3 times if 3 numbers are passed', () => {
        sumAll(1, 2, 3)
        expect(sum).toHaveBeenCalledTimes(3)
    })
    it('should sum 3 integers', () => {
        mocked(sum).mockReturnValue(6)
        expect(sumAll(1, 2, 3)).toBe(6)
    })
    it('should return an ERROR_NAN if any NaN are passed', () => {
        mocked(sum).mockImplementation(() => {
            throw new Error(ERROR_NAN)
        })
        expect(() => sumAll(1, 2, NaN)).toThrow(ERROR_NAN)
    })
})
