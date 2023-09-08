import { sum, sub, multiply, div, NAN_ERROR, Overflow_ERROR } from "../math-operators";

describe('Operación de suma', () => {
    it('sumar dos números enteros', () => {
        expect(sum(1, 1)).toStrictEqual(2) ;
    });

    it('Si alguno de los parametros es NaN devolvemos "NAN_ERROR"', () => {
        expect(() => sum(NaN, NaN)).toThrowError(NAN_ERROR);
    });

    it('Debería devolver la excepcion "Overflow_ERROR" cuando el resultado sea mayor a "2 exp(53) + 1" o menor a "-2 exp(53) - 1"', () => {
        expect(() => sum(12345678912345678, 100)).toThrowError(Overflow_ERROR) ;
    });

    it('Se debe poder sumar números decimales pequeños', () => {
        expect(sum(0.1, 0.2)).toStrictEqual(0.3);
    });
});
describe('Operación de resta', () => {
    it('resta dos números enteros', () => {
        expect(sub(1, 1)).toStrictEqual(0) ;
    });

    it('Si alguno de los parametros es NaN devolvemos "NAN_ERROR"', () => {
        expect(() => sub(NaN, NaN)).toThrowError(NAN_ERROR);
    });
});
describe('Operación producto', () => {
    it('producto dos números enteros', () => {
        expect(multiply(1, 1)).toStrictEqual(1) ;
    });

    it('Si alguno de los parametros es NaN devolvemos "NAN_ERROR"', () => {
        expect(() => multiply(NaN, NaN)).toThrowError(NAN_ERROR);
    });
});

describe('Operación de división', () => {
    it('Si alguno de los parametros es NaN devolvemos "NAN_ERROR"', () => {
        expect(() => div(NaN, NaN)).toThrowError(NAN_ERROR);
    });
    it('dividir dos números enteros', () => {
        expect(div(0, 2)).toStrictEqual(0) ;
    });
    it('Si dividimos por 0 devolvemos Infinity', () => {
        expect(div(2, 0)).toStrictEqual(Infinity) ;
    });
    it('Si dividimos por un número negativo entre 0 devolvemos -Infinity', () => {
        expect(div(-2, 0)).toStrictEqual(-Infinity) ;
    });
});