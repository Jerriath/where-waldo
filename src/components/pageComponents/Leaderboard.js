import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import PlayerList from "../subcomponents/leaderboardComponents/PlayerList";
import SidePanel from "../subcomponents/leaderboardComponents/SidePanel";



const Leaderboard = () => {

    //This hook is used to display the PlayerList component; this component depends on what the user clicks on the SidePanel so it will be set after that first click
    const [level, setLevel] = useState(null);
    const [scoreList, setScoreList] = useState(null);



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
        let level = e.target.name;
        const scoreList = await fetchScores(level);
        await setScoreList(scoreList);
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