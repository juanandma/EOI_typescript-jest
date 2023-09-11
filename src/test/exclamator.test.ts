import { countChars } from "../adapters";

jest.mock('../src/adapters', () => ({
    countChars: jest.fn()
}));

describe("remove-exclamations", () => {
    it('should remove exclmation marks', () => {
        expect(countChars).toHaveBeenCalledTimes(1) ;
    });
})