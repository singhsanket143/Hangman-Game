import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";

function PlayGameUI({ wordSelected, guessedLetters, step, handleLetterClick, hintGiven }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 p-4 sm:p-6 md:p-8 gap-8 sm:gap-10">
      
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-center">
        Hangman Game
      </h1>
      
      {/* Masked Text Display */}
      <div className="text-center">
        <Maskedtext text={wordSelected} guessedLetters={guessedLetters} />
        {hintGiven && (
          <p className="text-gray-400 mt-3 text-sm sm:text-lg italic">Hint: {hintGiven}</p>
        )}
      </div>

      {/* Hangman Visual */}
      <div className="w-full max-w-md flex justify-center">
        <HangMan step={step} />
      </div>
      
      {/* Letter Buttons */}
      <div className="flex justify-center items-center w-full max-w-2xl px-2 mt-6 flex-wrap">
        <LetterButtons
          text={wordSelected}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
      
      {/* Start Game Link */}
      <Link 
        to="/start" 
        className="mt-6 text-blue-400 hover:text-blue-600 underline text-base sm:text-lg"
      >
        Start New Game
      </Link>
    </div>
  );
}

export default PlayGameUI;
