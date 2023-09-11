import {subAll} from "./subAll";
import {sub} from "./sub";
import mocked = jest.mocked;

jest.mock('./sub', () => ({
    sub: jest.fn()
}))

describe("subAll", () => {
    it('should call "sub" 0 times if no parameters are passed', () => {
        subAll()
        expect(sub).not.toHaveBeenCalled()
    })
    it('should call "sub" 3 times if 3 numbers are passed', () => {
        subAll(1, 2, 3)
        expect(sub).toHaveBeenCalledTimes(3)
    })
    it('should sub 3 integers', () => {
        mocked(sub).mockReturnValue(3)
        expect(subAll(10, 5, 2)).toBe(3)
    })
})
