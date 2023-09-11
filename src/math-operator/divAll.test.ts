import {divAll} from "./divAll";
import {div} from "./div";
import mocked = jest.mocked;

jest.mock('./div', () => ({
    div: jest.fn()
}))

describe("divAll", () => {
    it('should call "div" 0 times if no parameters are passed', () => {
        divAll()
        expect(div).not.toHaveBeenCalled()
    })
    it('should call "div" 3 times if 3 numbers are passed', () => {
        divAll(1, 2, 3)
        expect(div).toHaveBeenCalledTimes(3)
    })
    it('should div 3 integers', () => {
        mocked(div).mockReturnValue(20)
        expect(divAll(2, 5, 2)).toBe(20)
    })
})
