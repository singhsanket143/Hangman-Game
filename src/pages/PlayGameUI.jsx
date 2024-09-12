import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";


function PlayGameUI({ wordSelected, guessedLetters, step, handleLetterClick, hintGiven }) {
   
    return (
        <>
            <h1>Play Game</h1>
            <Maskedtext text={wordSelected} guessedLetters={guessedLetters} />
            {hintGiven && <h3>Hint : {hintGiven}</h3>}
            
            <div>
                <LetterButtons text={wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>
            <div>
                <HangMan step={step}/>
            </div>
            <Link to='/start' className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGameUI;