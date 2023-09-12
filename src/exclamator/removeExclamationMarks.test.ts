import {removeExclamationMarks} from "./removeExclamationMarks";
describe('removeExclamationMarks. Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string', () => {

    it('should return "!" if input is an empty string', () => {
        expect(removeExclamationMarks('')).toBe('!')
    })

    it('should return the input with only one "!" at the end of string', () => {
        expect(removeExclamationMarks('Hello world!!!')).toBe('Hello world!')
    })
})
