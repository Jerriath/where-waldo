import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createPointsArray, checkPointsArray } from "../HelperFunctions/gameFunctions";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import Beach from "../../assets/maps/beach.jpg";
import CharacterDropdown from "../subcomponents/gameComponents/CharacterDropdown";
import StartGame from "../subcomponents/gameComponents/StartGame";
import Snackbar from "../subcomponents/gameComponents/Snackbar";
import EndGameMsg from "../subcomponents/gameComponents/EndGameMsg";
import PostScoreMsg from "../subcomponents/gameComponents/PostScoreMsg";



const Game = () => {

    //useLocation is used to store the map imgSrc and map name in so that the correct level will be displayed
    const location = useLocation();
    const level = location.state?.level;
    const map = location.state?.map;


    //These hooks are used in the return statement to append a component or to append null (e.g. StartGame or Snackbar; dropdown is set below)
    const [dropdown, setDropdown] = useState(null);
    const [endGameMsg, setEndGameMsg] = useState(null);
    const [postScoreMsg, setPostScoreMsg] = useState(null);
    

    //These hooks are used to store important variables
    const [foundArray, setFoundArray] = useState([false, false, false, false, false]);
    const [startTime, setStartTime] = useState(0);
    const [snackbarClass, setSnackbarClass] = useState("snackbarFound");
    const [snackbarMsg, setSnackbarMsg] = useState("");
    const [snackbarHolder, setSnackbarHolder] = useState("snackbarHidden");
    const [playerName, setPlayerName] = useState("");




    //Functions deal with calculating how long it took to find all characters
    const setStart = (e) => {
        let time = Math.floor(e.timeStamp) / 1000;
        setStartTime(time)
        setstartGame(null);
    }

    //Hook declared after setStart function because setStart is used in the hook
    const [startGame, setstartGame] = useState(<StartGame setStart={setStart.bind(this)}/>);

    const getTotalTime = (e) => {
        const start = startTime;
        let totalTime = Math.floor(((e.timeStamp / 1000) - start) * 1000) / 1000;
        return totalTime;
    }




    //Function for dealing with async get request
    const fetchAnswers = async (character, map) => {
        try {
            const answerRef = doc(db, `answers/${map}`);
            const answer = await getDoc(answerRef).then((doc) => doc.data());
            switch (character) {
                case "Waldo" :
                    return answer.waldo;
                case "Wenda" :
                    return answer.wenda;
                case "Wizard" :
                    return answer.wizard;
                case "Odlaw" :
                    return answer.odlaw;
                case "Woof" :
                    return answer.woof;
                default :
                    return null;
            }
        }
        catch(error) {
            console.log("A weird error occured. Get it away!", error);
        }
    }

    //Functions that deal with the dropdown list of characters
    const removeDropdown = async (pointsArray, character, map) => {
        const answer = await fetchAnswers(character, map);
        const found = checkPointsArray(answer, pointsArray);

        if (found) {
            let tempFoundArray = foundArray;
            switch (character) {
                case "Waldo" :
                    tempFoundArray[0] = true;
                    setFoundArray(tempFoundArray);
                    setSnackbarMsg("You found Waldo!!!")
                    break;
                case "Wenda" :
                    tempFoundArray[1] = true;
                    setFoundArray(tempFoundArray);
                    setSnackbarMsg("You found Wenda!!!")
                    break;
                case "Wizard" :
                    tempFoundArray[2] = true;
                    setFoundArray(tempFoundArray);
                    setSnackbarMsg("You found Wizard!!!")
                    break;
                case "Odlaw" :
                    tempFoundArray[3] = true;
                    setFoundArray(tempFoundArray);
                    setSnackbarMsg("You found Odlaw!!!")
                    break;
                case "Woof" :
                    tempFoundArray[4] = true;
                    setFoundArray(tempFoundArray);
                    setSnackbarMsg("You found Woof!!!")
                    break;
                default :
                    break;
            }
            setSnackbarClass("snackbarFound");
        }
        else{
            setSnackbarClass("snackbarMissed");
            setSnackbarMsg("Missed. Try again.")
        }

        setSnackbarHolder("snackbarShowing");
        setTimeout(() => {
            setSnackbarHolder("snackbarHidden");
        }, 2000);

        
        setDropdown(null);
    }

    const appendDropdown = (e) => {
        const pointsArray = createPointsArray(e);
        setDropdown(<CharacterDropdown 
            getTotalTime={getTotalTime.bind(this)} 
            removeDropdown={removeDropdown.bind(this)} 
            displayEndMsg={displayEndMsg.bind(this)}
            map={map} 
            foundArray={foundArray} 
            pointsArray={pointsArray}
            xPos={e.clientX}  
            yPos={e.clientY} />)
    }




    const postScore = async (name, time, map) => {
        let docRef = doc(db, map, name);
        await setDoc(docRef, {
            time: time
        });
    }

    const yesHandler = (totalTime) => {
        setEndGameMsg(null);
        setPostScoreMsg(
            <PostScoreMsg totalTime={totalTime} map={map} postScore={postScore} />
        );
    }

    const displayEndMsg = (totalTime) => {
        setEndGameMsg(<EndGameMsg yesHandler={yesHandler} map={map} totalTime={totalTime} />)
    }




    return (
        <div className="game" >
            <Snackbar holderClass={snackbarHolder} className={snackbarClass} msg={snackbarMsg} />
            {startGame}
            {endGameMsg}
            {postScoreMsg}
            <img className="gameLevel" alt="Map" src={level ? level:Beach} onClick={appendDropdown}/> 
            {dropdown}
        </div>
    )//The ternary statement used in the src attribute is there so that if someone routed to /Game without clicking a MapSelection, the defaul level will be level 1
}

export default Game;
