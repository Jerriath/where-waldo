import { Link } from "react-router-dom"
import { useState } from "react";


const EndGameMsg = (props) => {

    const yesHandler = () => {
        setEndMsg(
            <div className="endGameMsgHolder" >
                <h3 className="endGameMsg" >Finished in: {props.totalTime}</h3>
                <div className="inputHolder" >
                    <input className="nameInput" type="text" placeholder="Name..." />
                </div>
                <div className="endBtnHolder" >
                    <button className="endBtnGreen endBtn">Done</button>
                    <Link to="/">
                        <button className="endBtnRed endBtn">Cancel</button>
                    </Link>
                </div>
            </div>
        );
    }

    const [endMsg, setEndMsg] = useState(
        <div className="endGameMsgHolder" >
            <h3 className="endGameMsg" >You Won in {props.totalTime} seconds!</h3>
            <h4 className="endGameMsg" >Would you like to upload your score?</h4>
            <div className="endBtnHolder" >
                <button onClick={yesHandler} className="endBtnGreen endBtn">Yes</button>
                <Link to="/">
                    <button className="endBtnRed endBtn">No</button>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="darkBackground">
            {endMsg}
        </div>   
    );
}

export default EndGameMsg;