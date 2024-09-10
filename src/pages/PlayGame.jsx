import { Link, useLocation } from "react-router-dom";

function PlayGame() {
    const location = useLocation();
    console.log(location.state.value); // Here we are reading the data
    return (
        <>
            <h1>Play Game</h1>
            <Link to='/start'  className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;