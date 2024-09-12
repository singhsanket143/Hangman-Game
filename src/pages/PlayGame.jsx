import {useLocation } from "react-router-dom";
import { useState } from "react";
import PlayGameUI from "./PlayGameUI";

function PlayGame() {

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))

    // const { text, id } = useParams();

    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if(state.wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <PlayGameUI 
            wordSelected={state.wordSelected} 
            guessedLetters={guessedLetters} 
            step={step} 
            handleLetterClick={handleLetterClick}
            hintGiven={state.hintGiven} 
        />
    );
}

export default PlayGame;