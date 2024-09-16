import { getMaskedString } from "./MaskingUtility";

function Maskedtext({ text, guessedLetters }) {
    const maskedString = getMaskedString(text, guessedLetters);

    return (
        <div className="flex flex-wrap  flex justify-center text-orange-500 text-2xl font-bold">
            {maskedString.map((letter, index) => {
                return (
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </div>
    )
}

export default Maskedtext;