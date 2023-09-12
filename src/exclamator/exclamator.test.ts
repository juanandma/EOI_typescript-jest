import { countChars } from "./countChars";
import { removeExclamations } from "./exclamator";
import { removeExclamationMarks } from "./removeExclamationMarks";

jest.mock('./countChars', () => ({
    countChars: jest.fn(() => 50)
}))
jest.mock('./removeExclamationMarks', () => ({
    removeExclamationMarks: jest.fn(() => "")
}))
describe("remove-exclamations", () => {
    describe("With empty strings", () => {
        
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
                limit: 'It has passed 1 limit'
            });
        });
        it("if there is more than 100 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value", () => {
            jest.mocked(countChars).mockReturnValueOnce(111)
            expect(removeExclamations("")).toStrictEqual({
                value: "",
                total: 111,
                limit: 'It has passed 2 limit'
            });
        });
        it("if there is more than 150 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value", () => {
            jest.mocked(countChars).mockReturnValueOnce(151)
            expect(removeExclamations("")).toStrictEqual({
                value: "",
                total: 151,
                limit: 'It has passed 3 limit'
            });
        });
        it("if there is more than 200 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value", () => {
            jest.mocked(countChars).mockReturnValueOnce(201)
            expect(removeExclamations("")).toStrictEqual({
                value: "",
                total: 201,
                limit: 'It has passed 4 limit'
            });
        });
        it("if there is more than 250 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value", () => {
            jest.mocked(countChars).mockReturnValueOnce(251)
            expect(removeExclamations("")).toStrictEqual({
                value: "",
                total: 251,
                limit: 'It has passed the last limit',
                invalid: true
            });
        });
    })
})