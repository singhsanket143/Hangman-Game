import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
// import { WordContext } from "../context/WordContext";
import useWordStore from "../stores/WordStore";

function Home() {
    
    // const { setWord } = useContext(WordContext);

    const { setWordList, setWord } = useWordStore(); // coming from the store

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        setWordList([...data])

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
            <Link to='/play' >
                <Button text="Single player" />
            </Link>
            <br />
            <Link to="/start" >
                <div className="mt-4">
                    <Button text="Multi player" styleType="secondary" />
                    
                </div>
            </Link>
        </>
    )
}

export default Home;