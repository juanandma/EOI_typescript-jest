export function removeExclamationMarks(sentence: string): string {

    // Remueve todos los signos de exclamación excepto el último
    sentence = sentence.replace(/!/g, '');
    // Agrega un signo de exclamación al final
    sentence += '!';
    return sentence;
}

//const inputString: string = "¡Hola, mundo!!!";

//const result: string = removeExclamationMarks(inputString);

//console.log(result);