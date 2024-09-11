import { getMaskedString } from "./MaskingUtility";

function Maskedtext({ text, guessedLetters }) {
    const maskedString = getMaskedString(text, guessedLetters);

    return (
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}

export default Maskedtext;