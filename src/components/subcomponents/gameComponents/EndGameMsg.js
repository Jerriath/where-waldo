import { Link } from "react-router-dom"
import { useState } from "react";


const EndGameMsg = (props) => {

    const handleYes = () => {
        props.yesHandler(props.totalTime);
    }

    return (
        <div className="darkBackground">
            <div className="endGameMsgHolder" >
            <h3 className="endGameMsg" >You Won in {props.totalTime} seconds!</h3>
            <h4 className="endGameMsg" >Would you like to upload your score?</h4>
                <div className="endBtnHolder" >
                    <button onClick={handleYes} className="endBtnGreen endBtn">Yes</button>
                    <Link to="/">
                        <button className="endBtnRed endBtn">No</button>
                    </Link>
                </div>
            </div>
        </div>   
    );
}

export default EndGameMsg;