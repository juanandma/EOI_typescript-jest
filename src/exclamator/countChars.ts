export const ERROR_CHARACTER_LENGTH = 'Error: One character expected to be found'
export const countChars = (characterToFind: string, text: string): number => {


    if (characterToFind.length > 1) throw new Error(ERROR_CHARACTER_LENGTH)
    let count = 0
    if (characterToFind === 'ñ' || characterToFind === 'Ñ') {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === 'ñ' || text[i] === 'Ñ') {
                count++
            }
        }
        return count
    }


    for (let i = 0; i < text.length; i++) {
        if (text[i].localeCompare(characterToFind, undefined, {sensitivity: 'base'}) === 0) {
            count++
        }
    }
    return count
}