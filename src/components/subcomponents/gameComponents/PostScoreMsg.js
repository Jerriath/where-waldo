import { Link } from "react-router-dom"
import { useState } from "react";



const EndGameMsg = (props) => {

    const [playerName, setPlayerName] = useState("");

    const onChangeHandler = (e) => {
        setPlayerName(e.target.value);
    }

    const onSubmitHandler = () => {
        props.postScore(playerName, props.totalTime, props.map)
        
    }

    return (
        <div className="endGameMsgHolder" >
            <h3 className="endGameMsg" >Finished in: {props.totalTime}</h3>
            <div className="inputHolder" >
                <input onChange={onChangeHandler} value={playerName} className="nameInput" type="text" placeholder="Name..." />
            </div>
            <div className="endBtnHolder" >
                <Link to="/" >
                    <button onClick={onSubmitHandler} className="endBtnGreen endBtn">Done</button>
                </Link>
                <Link to="/">
                    <button className="endBtnRed endBtn">Cancel</button>
                </Link>
            </div>
        </div> 
    );
}

export default EndGameMsg;