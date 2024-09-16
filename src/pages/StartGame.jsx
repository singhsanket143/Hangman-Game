import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 px-4 sm:px-8 lg:px-12 py-10 gap-10">
      
      {/* Heading */}
      <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
        Start a New Hangman Game
      </h1>
      
      {/* Form Container */}
      <TextInputFormContainer />
      
      {/* Play Game Link */}
      <Link 
        to="/" 
        className="mt-8 text-blue-400 hover:text-blue-500 underline text-lg sm:text-xl"
      >
        Go to Play Game
      </Link>
    </div>
  );
}

export default StartGame;
