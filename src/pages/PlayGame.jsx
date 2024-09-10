import { Link, useLocation } from "react-router-dom";

function PlayGame() {
   let location =  useLocation();
   let wordData = location.state;

    return (
        <>
            <h1>Play Game</h1>
            <h1>{wordData}</h1>
            <Link to='/start'  className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;