import { Link } from "react-router-dom";
import "../../styles.css";



const LeaderboardDiv = () => {



    return (
        <div className="leaderboardDiv" >
            <div className="leaderboardMsgDiv">
                <h1 className="leaderboardMsg">Think you're fast?</h1>
                <h2 className="leaderboardCaption">Check out the leaderboard and see!</h2>
            </div>
            <div className="leaderbaordBtnDiv">
                <Link to="/leaderboard">
                    <button className="leaderboardBtn">Leaderboard</button>   
                </Link>
            </div>
        </div>
    )
}

export default LeaderboardDiv;