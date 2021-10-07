






const PlayerList = (props) => {


    return (
        <div className="playerList" >
            <h2 className="leaderboardTitle" >{`Level: ${props.level}`} </h2>
            <hr className="leaderboardLine" />
            {props.scoreList}
        </div>
    )
}

export default PlayerList;