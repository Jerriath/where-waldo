import { useState } from "react";
import uniqid from "uniqid";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { processScores } from "../HelperFunctions/leaderboardFunctions";
import PlayerList from "../subcomponents/leaderboardComponents/PlayerList";
import SidePanel from "../subcomponents/leaderboardComponents/SidePanel";
import PlayerScore from "../subcomponents/leaderboardComponents/PlayerScore";



const Leaderboard = () => {

    //This hook is used to display the PlayerList component; this component depends on what the user clicks on the SidePanel so it will be set after that first click
    const [level, setLevel] = useState("");
    const [scoreList, setScoreList] = useState([]);



    const fetchScores = async (level) => {
        try {
            const querySnapshot = await getDocs(collection(db, level));
            return querySnapshot;
        }
        catch (error) {
            console.log("A weird error occured. Get it away!", error);
        }
    }

    const selectLevel = async (e) => {
        let newLevel = e.target.name;
        setLevel(newLevel);
        const query = await fetchScores(newLevel);
        let newScoreList = await processScores(query);
        console.log(newScoreList);
        newScoreList = newScoreList.map( (score) => {
            return <PlayerScore name={score.name} time={score.time} key={uniqid()} />
        })
        console.log(newScoreList);
        setScoreList(newScoreList);
    }


    return (
        <div className="leaderboard" >
            <div className="leaderboardContent" >
                <SidePanel selectLevel={selectLevel} />
                <PlayerList scoreList={scoreList} level={level} />
            </div>
        </div>
    )
}

export default Leaderboard;