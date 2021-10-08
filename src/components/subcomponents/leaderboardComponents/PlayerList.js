






const PlayerList = (props) => {

    let level = props.level;
    let firstLetter = level.slice(0,1);
    let rest = level.slice(1);
    firstLetter = firstLetter.toUpperCase();
    level = firstLetter + rest;


    return (
        <div className="playerList" >
            <h2 className="leaderboardTitle" >{`Map: ${level}`} </h2>
            <hr className="leaderboardLine" />
            <div className="playerScore" >
                <div className="legendName" >
                    <h4 className="scoreEntry" >{"Player Name: "}</h4>
                </div>
                <div className="legendTime" >
                    <h4 className="scoreEntry" >{"Time: "}</h4>
                </div>
            </div>
            {props.scoreList}
        </div>
    )
}

export default PlayerList;

//Need to add the legend at the top of the leaderboard and then implement this functionality to the other maps as well!!!