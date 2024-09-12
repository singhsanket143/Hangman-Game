import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import PlayGameUI from "./PlayGameUI";
import PopUpModal from "../components/Modal/PopUpModal";
import { imageData } from "../components/HangMan/HangManUtility";
import Button from "../components/Button/Button";

function PlayGame() {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"))

  // const { text, id } = useParams();

  const { state } = useLocation();

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  const navigate = useNavigate();

  if (step >= imageData.length - 1 && !isGameOver) {
    setIsGameOver(true);
  }

  const checkWinCondition = (guessedLetters) => {
    const wordArray = state.wordSelected.toUpperCase().split('');
    return wordArray.every(letter => guessedLetters.includes(letter));
  };

  function handleLetterClick(letter) {
    if (state.wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct");
      const newGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(newGuessedLetters);

      if (checkWinCondition(newGuessedLetters)) {
        setIsGameWon(true);
        setIsGameOver(true); // End the game after a win
      }

    } else {
      console.log("Wrong");
      setStep(step + 1);
      setGuessedLetters([...guessedLetters, letter]);
    }

  }

  const handleModalClose = () => {
    window.alert(isGameWon ? "Congratulations! You won! You can play again" : "Game Over!!! Please click on play again.");
  };

  const  handlePlayAgain = () => {
    setIsGameOver(false);
    setIsGameWon(false);
    setStep(0);
    setGuessedLetters([]);
    navigate("/start");
  }


  return (
    <>
      <PopUpModal isOpen={isGameOver} closeModal={handleModalClose}>
        <div className="m-2 flex flex-col justify-center item-center">
          <h1 className="text-xl mb-2 ">
            {isGameWon ? "Congratulations! You Won!" : "Game Over!"}
          </h1>
          <Button text={"Play Again"} onClickHandler={handlePlayAgain}></Button>
        </div>
      </PopUpModal>

      <PlayGameUI
        wordSelected={state.wordSelected}
        guessedLetters={guessedLetters}
        step={step}
        handleLetterClick={handleLetterClick}
        hintGiven={state.hintGiven}
      />
    </>
  );
}

export default PlayGame;
