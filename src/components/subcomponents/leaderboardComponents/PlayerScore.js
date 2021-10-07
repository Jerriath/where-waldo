





const PlayerScore = (props) => {


    return (
        <div className="playerScore" >
            <div className="playerName" >
                <h4>{props.name}</h4>
            </div>
            <div className="playerTime" >
                <h4>{props.time}</h4>
            </div>
        </div>
    )
}

export default PlayerScore;