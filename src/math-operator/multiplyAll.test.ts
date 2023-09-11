import {multiplyAll} from "./multiplyAll";
import {multiply} from "./multiply";
import mocked = jest.mocked;

jest.mock('./multiply', () => ({
    multiply: jest.fn()
}))

describe("multiplyAll", () => {
    it('should call "multiply" 0 times if no parameters are passed', () => {
        multiplyAll()
        expect(multiply).not.toHaveBeenCalled()
    })
    it('should call "multiply" 3 times if 3 numbers are passed', () => {
        multiplyAll(1, 2, 3)
        expect(multiply).toHaveBeenCalledTimes(3)
    })
    it('should multiply 3 integers', () => {
        mocked(multiply).mockReturnValue(20)
        expect(multiplyAll(2, 5, 2)).toBe(20)
    })
})
