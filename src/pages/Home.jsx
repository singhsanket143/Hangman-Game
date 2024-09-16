import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

function Home() {
  const [word, setWord] = useState({});

  async function fetchWords() {
    const response = await fetch("http://localhost:3000/words");
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    setWord(data[randomIndex]);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url(https://c1.wallpaperflare.com/preview/703/967/600/rope-red-folding-chair-blood.jpg)] bg-cover bg-center p-6 gap-20">
      
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-white text-5xl font-extrabold tracking-wide">
          Hangman Challenge
        </h1>
        <p className="text-white text-xl mt-4">
          Test Your Word Skills!
        </p>
      </div>
      
      {/* Button Section */}
      <div className="flex flex-col items-center gap-4">
        <Link
          to="/play"
          state={{ wordSelected: word.wordValue, hintGiven: word.wordHint }}
        >
          <Button text="Single Player" />
        </Link>
        
        <Link to="/start">
          <Button text="Multiplayer" styleType="secondary" />
        </Link>
      </div>
      
      {/* Game Description Section */}
      <div className="text-white text-center text-sm max-w-xl leading-relaxed mt-8">
        <p>
          Hangman is a classic word-guessing game where you must guess the mystery word 
          one letter at a time. With each wrong guess, part of the hangman figure appears! 
          Save the hangman by solving the word before you run out of chances. Challenge 
          your vocabulary, test your word skills, and have fun in this thrilling puzzle game.
        </p>
      </div>
    </div>
  );
}

export default Home;
