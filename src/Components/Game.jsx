import "../game.css";
import Card from "./Card";
import { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (score > highScore) {
  setHighScore(score);
}

  return (
    <div className="gameContainer">
      <div className="titleContainer">
        <div className="titleCard">
          <img src="/title.png" alt="" />
          <p id="tagLine">Gotta remem' em all!</p>
          <div className="rules">
            <p>Rules: 1.Don't click on the same card twice 2.Follow rule 1!</p>
          </div>
        </div>

        <div className="scores">
          <p id="score">Score: {score}</p>
          <p id="highscore">High Score: {highScore}</p>
        </div>
      </div>
    <Card score={score} setScore={setScore}/>
    </div>
  );
}

export default Game;
