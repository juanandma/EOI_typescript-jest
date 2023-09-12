import { countChars } from "./countChars"
import { removeExclamationMarks } from "./removeExclamationMarks";

// TODO Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
// For a beginner, you can assume that the input data is always a non empty string, no need to verify it.

// should return an object with the 'total' number ocurrences and the 'value' string;

// if there is more than 50 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value

// if there is more than 100 occurrences we should add new prop 'limit' to object with 'It has passed second limit value

// if there is more than 150 occurrences we should add new prop 'limit' to object with 'It has passed third limit' value

// if there is more than 200 occurrences we should add new prop 'limit' to object with 'It has passed fourth limit' value

// if there is more than 250 occurrences we should add new prop 'limit' to object with 'It has passed the last limit' value and another prop 'invalid' with true value



export const removeExclamations = (sentence: string) => {


    const occurrences = countChars('!', sentence);
    let result: { total: number; value: string; limit?: string; invalid?: boolean } = {
        total: occurrences,
        value: removeExclamationMarks(sentence)
    };

    const passedlimit = Math.floor(occurrences/50)


    if ((1 < passedlimit) && (4 >= passedlimit)) {

        result.limit = 'It has passed '+passedlimit+' limit';

    }
    else if (4 < passedlimit){

        result.limit = 'It has passed the last limit';
        result.invalid = true;
    }

    return result;

};


