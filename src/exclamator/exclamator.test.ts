import {countChars} from "./adapters";
import { removeExclamations } from "./exclamator";

jest.mock('./adapters', () => ({
    countChars: jest.fn(() => 50)
}))

describe("remove-exclamations", () => {
    it("if there is less or equal than 50 occurrences we should return an object with the 'total' number ocurrences and the 'value' string", () => {
        //jest.mocked(countChars).mockReturnValueOnce(49)
        expect(removeExclamations("")).toEqual({
            total: 50,
            value: ""
            
        });
    });

    it("if there is more than 50 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value", () => {
        jest.mocked(countChars).mockReturnValueOnce(51)
        expect(removeExclamations("")).toStrictEqual({
            value: "",
            total: 51,
            limit: 'It has passed first limit'
        });
    });
    it("if there is more than 100 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value", () => {
        jest.mocked(countChars).mockReturnValueOnce(111)
        expect(removeExclamations("")).toStrictEqual({
            value: "",
            total: 111,
            limit: 'It has passed second limit'
        });
    });
    it("if there is more than 150 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value", () => {
        jest.mocked(countChars).mockReturnValueOnce(111)
        expect(removeExclamations("")).toStrictEqual({
            value: "",
            total: 151,
            limit: 'It has passed third limit'
        });
    });
})