import {countChars, ERROR_CHARACTER_LENGTH} from "./countChars";
describe('countChars', () => {

    it('should return 0 if any of the parameters is empty', () => {
        expect(countChars('','')).toBe(0)
    })

    it('should return 0 if the character to find is not on the text', () => {
        expect(countChars('!','Hello World')).toBe(0)
    })

    it('should return 1 if the character is found once on the text', () => {
        expect(countChars('!','Hello World!')).toBe(1)
    })

    it('should not be case sensitive', () => {
        expect(countChars('h','Hello World!')).toBe(1)
    })

    it('should return an error when more than one characters are expected to be found', () => {
        expect(() => countChars('hello','Hello World!')).toThrow(ERROR_CHARACTER_LENGTH)
    })

    it('should not be accent sensitive', () => {
        expect(countChars('e','olé!')).toBe(1)
    })   
    
    it('should differentiate between "ñ" and "n"', () => {
        expect(countChars('ñ','uña')).toBe(1)
    })    

    it('should differentiate between "ñ" and "n"', () => {
        expect(countChars('ñ','una')).toBe(0)
    })      
})