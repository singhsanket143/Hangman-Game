/**
 * 
 * @param { The word which is given as input and is expected to be guessed } originalWord 
 * @param { Letters which are guessed by the user already } guessedLetters 
 * Ex: origionalWord: HUMBLE
 * guessedLetters: ['H', 'M', 'E']
 * 
 * return -> "H _ M _ E"
 */
export function getMaskedString(originalWord, guessedLetters) {
    console.log("guessedLetters", guessedLetters)
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase()); // ['h', 'M', 'e'] ->['H', 'M', 'E']

    const guessedLetterSet = new Set(guessedLetters); // {'H', 'M', 'E'}

    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_";
        }
    }); // ['H', '_', 'M', '_', '_', 'E']

    return result;
}