const NAN_ERROR = 'Error: one of the numbers is not a number';
const Overflow_ERROR = 'Error: Overflow';


function throwIfNaN (a: number, b: number) {
    if ( isNaN(a) || isNaN(b))    {
        throw new Error(NAN_ERROR);
    }
}

function throwIfResultIsTooBigOrSmall (result: number) {
    if ((result > Number.MAX_SAFE_INTEGER) ||  (result < Number.MIN_SAFE_INTEGER)){
        throw new Error(Overflow_ERROR);
    }
}

function sum(a: number, b: number): number {
    
    throwIfNaN (a,b)
    
    const result = a + b
    throwIfResultIsTooBigOrSmall(result)

    const roundedResult = Math.round(result * 1000000000000000) / 1000000000000000;

    if (result < 1) roundedResult
      return roundedResult;    
}

function sub(a: number, b: number): number {
    throwIfNaN (a,b)
    const result = a - b
    throwIfResultIsTooBigOrSmall(result)
    return result
}

function multiply(a: number, b: number): number {
    throwIfNaN (a,b)
    const result = a * b
    throwIfResultIsTooBigOrSmall(result)
    return result
}

function div(a: number, b: number): number {
    throwIfNaN (a,b)  
    const result = a / b
    //throwIfResultIsTooBigOrSmall(result)
    return result
}

// To Implement: sumAll, subAll, multiplyAll, divAll

export { sum, sub, multiply, div, NAN_ERROR, Overflow_ERROR };



