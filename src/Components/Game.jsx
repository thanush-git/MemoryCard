import "../game.css"

function Game(){
    return(
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
                <p>Score:</p>
                <p>High Score: </p>
            </div>
            </div>
        </div>
    )
}

export default Game