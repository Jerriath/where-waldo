





const PlayerScore = (props) => {


    return (
        <div className="playerScore" >
            <div className="playerName" >
                <h4 className="scoreEntry" >{props.name}</h4>
            </div>
            <div className="playerTime" >
                <h4 className="scoreEntry" >{props.time}</h4>
            </div>
        </div>
    )
}

export default PlayerScore;