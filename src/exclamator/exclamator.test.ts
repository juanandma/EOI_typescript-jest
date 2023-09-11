import {countChars} from "./adapters";

jest.mock('./adapters', () => ({
    countChars: jest.fn(() => 50)
}))

describe("remove-exclamations", () => {
    it("should remove exclamation marks", () => {
    });
})
